use anoma::types::address::Address;
use anoma::types::key::ed25519;

/// Vp imports and functions.
pub mod vp {
    pub use anoma::types::key::ed25519::*;
    use anoma::types::key::sigscheme::SigScheme;

    use super::*;
    use crate::imports::vp;

    /// Get the public key associated with the given address. Panics if not
    /// found.
    pub fn get(owner: &Address) -> Option<PublicKey> {
        let key = ed25519::Ed25519Scheme::pk_key(owner).to_string();
        vp::read_pre(&key)
    }
}
