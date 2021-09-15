initSidebarItems({"attr":[["transaction","This macro expects a function with signature:"]],"constant":[["ENV",""]],"derive":[["BorshDeserialize",""],["BorshSerialize",""]],"enum":[["Address","An account’s address"]],"fn":[["delete","Delete a value at the given key from storage."],["get_block_epoch","Get epoch of the current block"],["get_block_hash","Get hash of the current block"],["get_block_height","Get height of the current block"],["get_chain_id","Get the chain ID"],["has_key","Check if the given key is present in storage."],["init_account",""],["insert_verifier","Insert a verifier address. This address must exist on chain, otherwise the transaction will be rejected."],["iter_prefix","Get an iterator with the given prefix."],["log_string","Log a string. The message will be printed at the `tracing::Level::Info`."],["read","Try to read a variable-length value at the given key from storage."],["update_validity_predicate","Update a validity predicate"],["write","Write a value at the given key to storage."]],"mod":[["address","Implements transparent addresses as described in Accounts Addresses."],["ibc","IBC-related data definitions and transaction and validity-predicate helpers."],["intent","Tx imports and functions."],["internal","Shared internal types between the host env and guest (wasm)."],["key","Cryptographic keys"],["proof_of_stake","Proof of Stake system integration with functions for transactions"],["storage","Storage types"],["time","Types for dealing with time and durations."],["token","Tx imports and functions."],["transaction","Types that are used in transactions."],["validity_predicate","Types that are used in validity predicates."]],"struct":[["KeyValIterator",""],["PoS","Proof of Stake system. This struct integrates and gives access to lower-level PoS functions."]],"trait":[["BorshDeserialize","A data-structure that can be de-serialized from binary format by NBOR."],["BorshSerialize","A data-structure that can be serialized into binary format by NBOR."],["PosRead","Read-only part of the PoS system"],["PosWrite","PoS system trait to be implemented in integration that can read and write PoS data."]]});