const crypto = require("crypto")

exports.deterministicPartitionKey = event => {
   const TRIVIAL_PARTITION_KEY = "0"
   const MAX_PARTITION_KEY_LENGTH = 256
   
   const partitionKey = JSON.stringify(event?.partitionKey)

   // Assigns a value based on whether or not a partition key was passed in.  Enforces string data type and max length
   let candidate =
      partitionKey
         ? partitionKey.length > MAX_PARTITION_KEY_LENGTH
            ? crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
            : partitionKey
         : TRIVIAL_PARTITION_KEY

   return candidate
}
