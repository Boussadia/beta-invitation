from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'beta_invitation.views.home', name='home'),
    # url(r'^beta_invitation/', include('beta_invitation.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
	
	# Serving base index page
	url(r'^/?', 'invitations.views.index'),

	# Include api urls
	url(r'^api/', include('invitations.urls')),
)
