# Create your views here.

from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.conf import settings
from django.db import IntegrityError

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from invitations.models import Prospect
from invitations.serializer import ProspectSerializer


def index(request):
	return render(request, 'invitations/index.html', {'DEBUG': settings.DEBUG})

class ProspectsAPIView(APIView):
	"""
		Prospect api view.
	"""
	def get_prospect(self, id_prospect ):
		"""
			Helper method to properly handle prospect entity model retrieval
		"""
		try:
			return Prospect.objects.get(pk = id_prospect)
		except Prospect.DoesNotExist:
			raise Http404
	
	def get(self, request, id_prospect = None):
		"""
			Getting all prospect lists.
		"""
		if id_prospect is None:
			prospects = Prospect.objects.all()
			serializer = ProspectSerializer(prospects, many = True)
			return Response(serializer.data)
		else:
			prospect = self.get_prospect(id_prospect)
			serializer = ProspectSerializer(prospect)
			return Response(serializer.data)
	
	def post(self, request, id_prospect = None):
		"""
			POST method handles prospect creation
		"""

		# Creating new prospect
		if 'mail' in request.DATA:
			mail = request.DATA['mail']
			try:
				new_prospect = Prospect(mail = mail)
				new_prospect.save()
				serializer = ProspectSerializer(new_prospect)
				return Response(serializer.data)
			except IntegrityError, e:
				content = {'detail': 'mail %s already in prospects database'%mail}
				return Response(content, status = status.HTTP_409_CONFLICT)
		else:
			raise Http404
	
	def put(self, request, id_prospect):
		"""
			PUT method, send mail to invite prospect to try service
		"""

		if 'id_prospect' in request.DATA:
			id_prospect = request.DATA['id_prospect']
		
		prospect = self.get_prospect(id_prospect)
		if not prospect.is_invited:
			print 'Inviting prospect %s'%(prospect.mail)
			prospect.is_invited = True
			prospect.save()
		else:
			print '%s already invited'%prospect.mail
		
		serializer = ProspectSerializer(prospect)
		return Response(serializer.data)

