from django.conf.urls import patterns, include, url

import views

urlpatterns = patterns('',
	# Authentication
	# TO BE DONE

	# Inviations
	url('prospects/(?P<id_prospect>(\d+))?/?', views.ProspectsAPIView.as_view()),
)
