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

