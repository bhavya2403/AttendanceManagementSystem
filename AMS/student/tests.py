from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$yueQDTXzeP5h8SIscEitYn$UG45pIBkEp7NPDiBOwdDcHWn7bq5obHdhengUCr/8sE='}

    def test_profile(self):
        response = self.client.post('/student/', {'email': '202001067@daiict.ac.in', 'password':
            'bhavya', 'role': 'student'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'name': 'Bhavya Rajdev',
                                    'batch': 'MTech I',
                                    'id': '202001067',
                                    'Organic Chemistry': {'present': 0, 'total': 0},
                                    'Software Engineering': {'present': 1, 'total': 3}})
    def test_profile_token(self):
        response = self.client.post('/student/', **self.header)
        self.assertEqual(response.status_code, 200)
        print(json.loads(response.content))
        self.assertEqual(json.loads(response.content), {
            'name': 'Nidhi Singh', 'batch': 'BTech II', 'id': '202001095',
            'courses': [
                ['Introduction to Computer Science', 2, 2],
                ['International Economy', 3, 7],
                ['Software Engineering', 4, 10],
                ['digital communication', 5, 20],
                ['Embedded hardware design', 2, 10],
                ['Digital-Analog Circuits', 6, 14]]
            }
        )


