# Create your views here.

from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.conf import settings

from rest_framework.response import Response
from rest_framework.views import APIView

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
			POST method handles prospect creation and prospect invitation sending.
		"""

		if id_prospect is None:
			# Creating new prospect
			if 'mail' in request.POST:
				mail = request.POST['mail']
				new_prospect = Prospect(mail = mail)
				new_prospect.save()
				serializer = ProspectSerializer(new_prospect)
				return Response(serializer.data)
			else:
				raise Http404
		else:
			prospect = self.get_prospect(id_prospect)
			if not prospect.is_invited:
				print 'Inviting prospect %s'%(mail)
				prospect.is_invited = True
				prospect.save()
			else:
				print '%s already invited'%mail
			
			serializer = ProspectSerializer(prospect)
			return Response(serializer.data)

