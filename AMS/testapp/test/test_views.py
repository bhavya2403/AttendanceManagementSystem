from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()

    def test_register(self):
        response = self.client.post('/register/', {'email': 'nikhil_1234@gmail.com',
                        'password': 'rohnikhilt2002',
                        'role': 'admin',
                        'create_mail': 'bhavyasdcvdrt@gmail.com',
                        'create_password': 'noqwaedrqwtBhavya',
                        'create_role': 'student'})
        self.assertEqual(response.status_code, 409) # conflict

    def test_login(self):
        response = self.client.post('/login/', {'email': 'nikhil_1234@gmail.com', 'password': 'rohnikhilt2002',
                                                'role': 'admin'})
        self.assertEqual(response.status_code, 200)

    def test_profile(self):
        response = self.client.post('/student/', {'email': '202001067@daiict.ac.in', 'password':
            'bhavya',
                                                          'role': 'student'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'name': 'Bhavya Rajdev',
                                    'batch': 'MTech I',
                                    'id': '202001067',
                                    'Organic Chemistry': {'present': 0, 'total': 0},
                                    'Software Engineering': {'present': 1, 'total': 3}})