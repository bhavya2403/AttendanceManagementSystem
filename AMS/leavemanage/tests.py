from django.test import TestCase, Client

class TestLeave(TestCase):
    def setUp(self):
        self.client = Client()
        # admin token
        self.token1 = 'pbkdf2_sha256$320000$zYT1PfOLGbt9tyqL9WZCsA$qG8Ny30yLtPNcEv7rB8j4zf7OwmwzWwzV4/2JxGGtpc='
        # some other token
        self.token2 = 'pbkdf2_sha256$320000$2PGijHfWJVFNxLjhs024nF$x2AUg4MOE7UGjDVPdJwFV6oK06TGhuw0xlFeRmVvmuE='
        self.header = {'HTTP_TOKEN': self.token1}

    def test_get_leaves_admin(self):
        response = self.client.post('/leavemanage/get_leaves/', **self.header)
        self.assertEqual(response.status_code, 200)

    def test_insert_leave_fail(self):
        self.header = {'HTTP_TOKEN': self.token2}
        response = self.client.post('/leavemanage/medicalform/', {
            'leave_type': 'sick leave',
            'reason': "I can't attend the class because of bla bla bla",
            'start_date': "2023-04-25",
            'end_date': "2023-04-23"
        }, **self.header)
        self.assertEqual(response.status_code, 406)

    def test_insert_leave(self):
        self.header = {'HTTP_TOKEN': self.token2}
        response = self.client.post('/leavemanage/medicalform/', {
            'leave_type': 'sick leave',
            'reason': "I can't attend the class because of bla bla bla",
            'start_date': "2023-04-25",
            'end_date': "2023-04-26"
        }, **self.header)
        self.assertEqual(response.status_code, 200)
