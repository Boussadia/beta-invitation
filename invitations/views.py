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

	def get(self, request):
		"""
			Getting all prospect lists.
		"""
		prospects = Prospect.objects.all()
		serializer = ProspectSerializer(prospects, many = True)
		return Response(serializer.data)
