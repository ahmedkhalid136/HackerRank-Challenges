function flippingBits(n: number): number {
  const binary = convertDecimalToBinary(n);

  const signedBits = convertSignedBits(binary);
  console.log(
    "\n" +
    "Number: " + n + "\n",
    "Binary: " + "" + binary+ "\n",
    "Signed Bit: " + "" + signedBits + "\n",
    "Result: " + "" + convertBinaryToDecimal(signedBits)+ "\n"
  );
  return convertBinaryToDecimal(signedBits);
  // Write your code here
}

function convertSignedBits(n: string): string {
  let binary = n;
  for (var i = 0; i < binary.length; i++) {
    if (binary.charAt(i) === "1") {
      binary = replaceCharAt(binary, i, "0");
      continue;
    }
    binary = replaceCharAt(binary, i, "1");
  }

  return binary;
}

function convertBinaryToDecimal(n: string): number {
  let result = 0;
  let count = 0;
  for (var i = n.length - 1; i >= 0; i--) {
    result = result + Number(n.charAt(i)) * 2 ** count;
    count++;
  }

  return result;
}

function replaceCharAt(str: string, pos: number, value: string) {
  const firstHalf = str.substring(0, pos);
  const secondHalf = str.substring(pos + 1, str.length);
  return firstHalf + value + secondHalf;
}

function convertDecimalToBinary(n: number): string {
  let value = n;
  let result = "";
  do {
    result = (value % 2) + result;
    value = Math.floor(value / 2);
  } while (value > 1);
  result = String(value) + result;

  while (result.length !== 32) {
    result = "0" + result;
  }
  return result;
}

flippingBits(10000)