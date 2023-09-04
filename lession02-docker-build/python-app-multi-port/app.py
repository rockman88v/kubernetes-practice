from flask import Flask

app = Flask(__name__)

@app.route('/port3003')
def hello_port3003():
    return 'Hello from PORT 3003'

@app.route('/port3004')
def hello_port3004():
    return 'Hello from PORT 3004'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3003, threaded=True)
    app.run(host='0.0.0.0', port=3004, threaded=True)

