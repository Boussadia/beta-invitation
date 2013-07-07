# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Prospect.is_invited'
        db.add_column(u'invitations_prospect', 'is_invited',
                      self.gf('django.db.models.fields.BooleanField')(default=False),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Prospect.is_invited'
        db.delete_column(u'invitations_prospect', 'is_invited')


    models = {
        u'invitations.prospect': {
            'Meta': {'object_name': 'Prospect'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_invited': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'mail': ('django.db.models.fields.EmailField', [], {'unique': 'True', 'max_length': '75'})
        }
    }

    complete_apps = ['invitations']