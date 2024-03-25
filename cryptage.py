import random
import base64

def encode(key, clear):
	clear1 = clear.replace("\n", "")
	enc = []

	for i in range(len(clear1)):
		key_c = key[i % len(key)]
		enc_c = chr((ord(clear1[i]) +
					ord(key_c)) % 256)

		enc.append(enc_c)

	return base64.urlsafe_b64encode("".join(enc).encode()).decode()

# Function to decode
def decode(key, enc):
	enc1 = enc.replace("\n", "")
	dec = []

	enc = base64.urlsafe_b64decode(enc1).decode()
	for i in range(len(enc1)):
		key_c = key[i % len(key)]
		dec_c = chr((256 + ord(enc1[i]) -
						ord(key_c)) % 256)

		dec.append(dec_c)
	return "".join(dec)
# print(encode("sdf", "Hello world")) #w5vDicOSw5_Dk8KGw6rDk8OYw5_DiA==
# print(decode("sdf", "wrvDicOSw5_Dk8KGw6rDk8OYw5_DiA==")) #Hello world