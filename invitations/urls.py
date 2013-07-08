from django.conf.urls import patterns, include, url

import views

urlpatterns = patterns('',
	# Authentication
	# TO BE DONE

	# Inviations
	url('prospects/?', views.ProspectsAPIView.as_view()),
)
