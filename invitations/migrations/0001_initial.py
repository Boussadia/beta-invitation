# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Prospect'
        db.create_table(u'invitations_prospect', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('mail', self.gf('django.db.models.fields.EmailField')(unique=True, max_length=75)),
        ))
        db.send_create_signal(u'invitations', ['Prospect'])


    def backwards(self, orm):
        # Deleting model 'Prospect'
        db.delete_table(u'invitations_prospect')


    models = {
        u'invitations.prospect': {
            'Meta': {'object_name': 'Prospect'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'mail': ('django.db.models.fields.EmailField', [], {'unique': 'True', 'max_length': '75'})
        }
    }

    complete_apps = ['invitations']