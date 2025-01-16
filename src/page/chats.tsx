import { Container } from '@mui/material';
import Nav from '../component/Nav';

const Chats = () => {
  return (
    <div>
      <Container className="content">
        Chats
        <p>
          We have some exciting news to share! IPFS (opens new window)and libp2p
          (opens new window)are officially taking big steps forward in project
          maturity, with independent foundations and funding structures in the
          Protocol Labs network! Protocol Labs is building a better web: more
          open, more resilient, more efficient. Our approach has been to invent
          and implement new web protocols, all designed on a bedrock of content
          addressing and peer-to-peer networks. Since 2014, we’ve incubated many
          protocols and standards that are now de facto standards in Web3 and
          beyond, including IPFS (opens new window), libp2p (opens new window),
          IPLD (opens new window), CIDs, multiformats (opens new window), Drand
          (opens new window), and more. Since then, IPFS has been used to
          organize and distribute many exabytes of data across the globe, with
          250,000 public peer-to-peer nodes, and over 2.5 million daily users.
          It’s been used by technologists, archivists, activists, artists,
          scientists, and many other data communities. It has helped solve
          problems ranging from verifiable preservation of important historical
          archives to enabling communication in the face of censorship or low
          connectivity. Similarly, libp2p (opens new window)grew out of the IPFS
          project to become the peer-to-peer networking layer of Web3. It has
          modular components for peer discovery, peer routing, transports, NAT
          traversal, and more, and 12 implementations power IPFS, Filecoin,
          Ethereum consensus, Polkadot, and many other L1 and L2 networks.
          Today, libp2p secures a total market cap of $300 billion at the
          networking layer. Together, IPFS and libp2p are the de facto standards
          for organizing data, sharing content, and peer-to-peer networking
          across Web3. They’re also gaining surface area in Web2, with support
          or integrations available in Brave (opens new window), Opera (opens
          new window), Chromium (opens new window), cURL (opens new window),
          Unity, the Unreal Engine (opens new window), and more. While these
          projects were invented and incubated at Protocol Labs, their open
          source communities have played major roles from the start. Brave,
          Cloudflare, Consensys, Fission, Number Zero, and many other
          individuals and teams have built new implementations and integrations,
          contributed to protocol design, provided public network services, and
          led working groups. In many ways, these projects have been working
          independently and openly for years. Now, it’s time to advance that
          independence. By taking these steps, we aim to ensure each project’s
          long-term health in multiple dimensions: Independent Protocol
          Foundations. IPFS and libp2p will each have a foundation dedicated to
          its long-term success. IP (copyrights, trademarks, websites, etc.)
          will transfer from Protocol Labs, Inc. to these foundations, and
          continue to be dual-licensed under MIT and Apache 2.0. Open Protocol
          Governance. Some projects, like IPFS (opens new window)and libp2p
          (opens new window), have already established open protocol governance.
          Other projects will see upgrades. Independent engineering teams,
          collaborating publicly. The IPFS- and libp2p-focused engineering teams
          currently housed at Protocol Labs will become independent entities in
          the Protocol Labs network (opens new window). Led by longtime
          maintainers and project leaders, they will form a new entity dedicated
          to several popular implementations (such as Kubo (opens new window)and
          its underlying Boxo library (opens new window), Helia (opens new
          window), go-libp2p, js-libp2p, rust-libp2p, and more) and public
          network services (such as ProbeLab (opens new window), ipfs.io
          gateway, and the Amino DHT bootstrappers).
        </p>
      </Container>
      <Nav />
    </div>
  );
};

export default Chats;
