# Create your views here.

from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.conf import settings

from django.contrib.auth.decorators import user_passes_test


def index(request):
	return render(request, 'invitations/index.html', {'DEBUG': settings.DEBUG})
