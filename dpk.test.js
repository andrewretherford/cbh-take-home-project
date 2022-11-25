const { deterministicPartitionKey } = require("./dpk");

const tooLong = { partitionKey: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas enim fugit perspiciatis? Cum inventore numquam reiciendis magni exercitationem expedita maiores necessitatibus nihil ratione! Maiores aliquid eius adipisci ut deserunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  
  it("Enforces a max length of 256 characters for candidate", () => {
    const hashKey = deterministicPartitionKey(tooLong);
    expect(hashKey.length).toBe(128);
  })

  it("Returns a string regardless of input type", () => {
    const numberInput = deterministicPartitionKey({ partitionKey: 123 });
    expect(typeof numberInput).toBe('string');
  })
});
