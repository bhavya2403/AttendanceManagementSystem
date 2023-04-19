from django.test import TestCase, Client

# Create your tests here.
class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()

    def test_register(self):
        response = self.client.post('/auth/register/', {'email': 'nikhil_1234@gmail.com',
                        'password': 'rohnikhilt2002',
                        'role': 'admin',
                        'create_mail': 'bhavyasdcvdrt@gmail.com',
                        'create_password': 'noqwaedrqwtBhavya',
                        'create_role': 'student'})
        self.assertEqual(response.status_code, 409) # conflict

    def test_login(self):
        response = self.client.post('/auth/login/', {'email': 'nikhil_1234@gmail.com', 'password': 'rohnikhilt2002',
                                                'role': 'admin'})
        self.assertEqual(response.status_code, 200)