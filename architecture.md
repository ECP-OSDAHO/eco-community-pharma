# Architecture: Eco-Community Pharma Backend

## 1. Core Philosophy: "My Data, My Community"
The architecture is designed to be **Local-First** and **Decentralized**. This means the application works fully on the user's device (Edge) even without internet, and syncs with the community when possible.

## 2. Technology Stack

### 2.1. Local Database (The "Soil")
*   **RxDB (Reactive Database):** Runs inside the browser/PWA.
*   **Storage:** IndexedDB adapter.
*   **Encryption:** All sensitive data (Diaries, Health info) is encrypted at rest using the user's key.

### 2.2. Synchronization Layer (The "Mycelium")
*   **P2P Sync:** Devices in the same local network (Mesh) can sync directly via WebRTC (using libraries like `y-webrtc` or RxDB replication).
*   **Edge Relay:** A lightweight Cloudflare Worker acts as a relay for distant sync when internet is available, but does *not* store cleartext data.

### 2.3. Identity & Auth (The "Seed")
*   **DID (Decentralized Identifier):** Users generate a key pair on their device.
*   **Auth:** No passwords. Authentication is a cryptographic signature challenge.
*   **Recovery:** "Social Recovery" via trusted community members (Guardians).

## 3. Omnichannel Gateway
*   **Function:** Bridges "Web2" apps (WhatsApp, Instagram) to the "Web3" ecosystem.
*   **Flow:**
    1.  User sends WhatsApp message: "I have 5kg of tomatoes".
    2.  Gateway (Twilio/Meta API) receives webhook.
    3.  Edge Function parses intent (NLP).
    4.  System creates a `Product` listing on behalf of the user.
    5.  System replies on WhatsApp: "Listed! Share this link: eco.com/p/123".

## 4. Data Flow Diagram
```mermaid
graph TD
    UserDevice[User Device (PWA)] -->|Reads/Writes| LocalDB[(RxDB Local)]
    LocalDB <-->|Syncs (WebRTC)| NeighborDevice[Neighbor Device]
    LocalDB <-->|Syncs (HTTPS)| EdgeRelay[Cloudflare Worker]
    EdgeRelay -->|Persists (Encrypted)| GlobalStorage[(Durable Objects / IPFS)]
    
    WhatsApp[WhatsApp API] -->|Webhook| OmniGateway[Omnichannel Gateway]
    OmniGateway -->|Updates| GlobalStorage
```
