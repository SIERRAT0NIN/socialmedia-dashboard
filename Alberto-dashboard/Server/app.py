from flask import Flask, request, redirect
import requests
from flask_cors import CORS  # Import CORS


app = Flask(__name__)
CORS(app)  # Initialize CORS with the Flask app


CLIENT_ID = '86unsilffhx94n'
CLIENT_SECRET = 'pwopozNRqUjECuIo'
REDIRECT_URI = 'http://localhost:5173/callback'
AUTH_URL = 'https://www.linkedin.com/oauth/v2/authorization'
TOKEN_URL = 'https://www.linkedin.com/oauth/v2/accessToken'
CORS(app, origins=["http://localhost:5173"])

@app.route('/login')
def login():
    return redirect(f'{AUTH_URL}?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope=r_liteprofile')



@app.route('/callback')
def callback():
 
    code = request.args.get('code')
    data = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'scope':'w_member_social'
    }
    response = requests.post(TOKEN_URL, data=data)
    access_token = response.json().get('access_token')
    print(response)
    print('accessToken: ', access_token)
    return 'Login Successful'


if __name__ == '__main__':
    app.run(debug=True)
