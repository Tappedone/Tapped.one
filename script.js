function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}

const SITE_DATA = {
  lastUpdated: '9/24/2026',
  tabs: [
    {
      id: 'main',
      name: 'Main',
      description: 'A premium public leaderboard for cheat and spoofer providers.',
      providers: [
        {
          name: 'Reported.lol',
          logo: 'https://files.catbox.moe/cf381y.png',
          score: 9.9,
          verified: true,
          tier: 'S',
          category: 'Premium',
          description: 'Reported is the most known temporary HWID spoofer on the market. The developer(s) have a long-lasting reputation dating back many years. It remains under watch because some users still report low-report bans and occasional VPN kicks, but it is still one of the stronger options in the space.',
          tags: ['Spoofer', 'Popular', 'Under Watch'],
          website: 'https://reported.lol/',
          pros: ['Temporary spoofer', 'One-click', 'Strong reputation', 'Easy to use'],
          cons: ['Some low-report bans', 'Occasional VPN kicks', 'Needs continued monitoring']
        },
        {
          name: 'VERSE',
          logo: 'https://verse-solutions.com/img/Verselogo-thumb.png',
          score: 9,
          verified: true,
          tier: 'S',
          category: 'Premium',
          description: 'Verse is a known temporary and permanent HWID spoofer. It has a long reputation in the scene and is widely recognized for its permanent spoofer offering. It is currently under heavy scrutiny due to downtime and some scam concerns, but it remains a commonly discussed provider.',
          tags: ['Spoofer', 'Popular', 'Known Provider'],
          website: 'https://verse-solutions.com/downtime',
          pros: ['Multiple products', 'Established reputation', 'Strong community history'],
          cons: ['Downtime', 'Lawsuit concerns', 'High pricing']
        },
        {
          name: 'JOONY | SOFTWARE',
          logo: 'https://files.catbox.moe/ax9e49.png',
          score: 8.8,
          verified: true,
          tier: 'S',
          category: 'Value',
          description: 'Joony Software is a permanent HWID spoofer that has been running since 2023. It has both free and paid versions and is widely regarded as cheap and relatively reliable. Support can be slow at times, but the product still stands out in value and reputation.',
          tags: ['Top Pick', 'Spoofer', 'Reliable', 'Value'],
          website: 'https://joonysoftware.xyz',
          pros: ['Cheap', 'Reliable', 'Good support', 'Strong value'],
          cons: ['Support can be slow']
        },
        {
          name: 'Vixen | Temp Spoofer',
          logo: 'https://files.catbox.moe/707996.png',
          score: 8.8,
          verified: true,
          tier: 'S',
          category: 'Value',
          description: 'Vixen is known for their undetected internal product. Their temporary spoofer has been tested and can work well for lifetime users, though it has also been reported to crash occasionally. It is still a decent option for users who want a lower-cost, temporary solution.',
          tags: ['Top Pick', 'Spoofer', 'Reliable', 'Temporary'],
          website: 'https://discord.gg/ushxtVcwtF',
          pros: ['Undetected potential', 'Temporary option', 'Good support', 'Strong reputation'],
          cons: ['Can crash', 'Not fully stable on every setup']
        },
        {
          name: 'Firecheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=FI',
          score: 3,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Firecheats is mainly used for Fortnite and handles UAC relatively well, but it still has issues under newer UAC updates. It is better than many of the low-confidence vendors, but it is not fully stable and should be monitored closely.',
          tags: ['Fortnite', 'UAC', 'Caution'],
          website: '',
          pros: ['Handles UAC reasonably well', 'Better than many alternatives'],
          cons: ['Newer UAC issues', 'Not fully stable', 'Still under watch']
        }
      ]
    },
    {
      id: 'fortnite',
      name: 'Fortnite',
      description: 'Fortnite provider rankings.',
      providers: [
        {
          name: 'Midnight.Osaka',
          logo: '',
          score: 8,
          verified: true,
          tier: 'A',
          category: 'Premium',
          description: 'Midnight.Osaka recently received a ban wave. Product status is unconfirmed as of 9/22/2026, so this is a higher-risk provider until more evidence is collected.',
          tags: ['Premium', 'Fortnite', 'Monitor'],
          website: 'https://midnight.osaka/',
          pros: [],
          cons: ['Ban wave concerns', 'Unconfirmed status']
        },
        {
          name: 'ASX Software',
          logo: 'https://i.ibb.co/sdFJwjH9/image.png',
          score: 7.5,
          verified: true,
          tier: 'A',
          category: 'Premium',
          description: 'ASX Software offers multiple products across Fortnite, COD, Arc Raiders and Apex. It is known for external products and buyer protection, but there are reports that some of their spoofers are reseller-driven and not fully trustworthy.',
          tags: ['Spoofer', 'Cheats', 'DMA', 'Fortnite'],
          website: 'https://asxsoftware.com',
          pros: ['Instant delivery', 'Buyer protection', 'Cheap for the quality'],
          cons: ['Reseller concerns', 'Support may be slow', 'Not fully trusted by all users']
        },
        {
          name: 'Vixen',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=V',
          score: 8.5,
          verified: true,
          tier: 'S',
          category: 'Premium',
          description: 'Vixen is an internal cheat packed with silent-aim features and low pricing. It is known for bypassing EAC and UAC, although update speed can be inconsistent at times.',
          tags: ['Spoofer', 'Cheats', 'DMA', 'Fortnite'],
          website: 'https://discord.gg/vixencommunity',
          pros: ['Multiple products', 'Cheap', 'Easy to use', 'Public'],
          cons: ['Updates can take time']
        },
        {
          name: 'Badware',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=BA',
          score: 3,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Badware is a hookless spoofer with compatibility limitations. It reportedly does not work correctly with Fortnite EAC in many cases unless certain NVMe conditions are met, and delayed kicks remain a concern.',
          tags: ['Hookless', 'Fortnite EAC', 'NVMe Required', 'Delayed Kick'],
          website: '',
          pros: [],
          cons: ['Compatibility issues', 'Fortnite EAC problems', 'Delayed kick concerns']
        },
        {
          name: 'Firecheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=FI',
          score: 3,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Mainly used for Fortnite, Firecheats handles UAC relatively well but is still affected by newer UAC updates. It is not fully stable yet, but it is better than many lower-confidence alternatives.',
          tags: ['Fortnite', 'UAC', 'Caution'],
          website: '',
          pros: ['Reasonably handles UAC'],
          cons: ['Newer UAC issues', 'Still under watch']
        }
      ]
    },
    {
      id: 'val',
      name: 'Valorant',
      description: 'Valorant provider rankings.',
      providers: [{
        name: 'Sys-Info',
        logo: 'https://files.catbox.moe/hdm3du.png',
        score: 4,
        verified: true,
        tier: 'C',
        category: 'Valorant',
        description: 'Mixed ranking based on reports of fake status updates and slow support. Their Pulse emu reportedly went down for months, and their Private Tracex emu has been tied to frequent bans despite the high price point. It is a risky choice for users who want stability.',
        tags: ['Fake Status', 'Slow Updates', 'Ban Reports', 'Overpriced'],
        website: '',
        pros: [],
        cons: ['Fake status updates', 'Slow product updates', 'Frequent ban reports', 'High price relative to reliability']
      }]
    },
    {
      id: 'spoofers',
      name: 'Spoofers',
      description: 'HWID spoofer rankings.',
      providers: [
        {
          name: 'Firecheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=FI',
          score: 3,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Firecheats is a better-than-average option compared with many low-confidence vendors, but it still has issues under newer UAC updates. It handles UAC reasonably well in some cases, though it remains unstable and should be watched.',
          tags: ['Outdated', 'VPN Kicks', 'Delayed', 'Avoid'],
          website: '',
          pros: ['Handles UAC okay', 'Better than some alternatives'],
          cons: ['VPN kicks', 'Delays', 'Newer UAC issues', 'Unstable']
        },
        {
          name: 'Redware',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=RE',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Redware has a very poor reputation. There is little positive feedback, and it is generally known for poor detection handling. It is not a provider most users should trust based on the current reports.',
          tags: ['Poor Feedback', 'Avoid', 'Low Rated'],
          website: '',
          pros: [],
          cons: ['Very poor feedback', 'Low confidence', 'Detection issues', 'Not recommended']
        },
        {
          name: 'Primary',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=PR',
          score: 1,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Primary is strongly advised against. It has several repeated reports of immediate VPN kicks, scam allegations, ratting, blame, and malicious behavior. These claims should be treated as allegations unless independently verified.',
          tags: ['Avoid', 'VPN Kick', 'Reported Issues', 'High Risk'],
          website: '',
          pros: [],
          cons: ['Immediate VPN kicks', 'Scam allegations', 'Ratting reports', 'High-risk reputation']
        },
        {
          name: 'Trumpware',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=TR',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Trumpware is not recommended. Reports include scam allegations and frequent VPN kicks, and there is not enough positive evidence to justify trust in the provider.',
          tags: ['Avoid', 'VPN Kick Reports', 'Scam Reports', 'High Risk'],
          website: '',
          pros: [],
          cons: ['Scam reports', 'VPN kick reports', 'Low confidence']
        },
        {
          name: 'Echo / Focus',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=EC',
          score: 2.9,
          verified: true,
          tier: 'C',
          category: 'Premium',
          description: 'Echo / Focus is tied to exit-scamming behavior and is known for not delivering products or accounts when challenged. The owner has also reportedly bought members and manipulated the community around the service.',
          tags: ['Avoid', 'Scam Reports', 'High Risk'],
          website: '',
          pros: [],
          cons: ['Scam reports', 'Exit scam concerns', 'Low confidence']
        },
        {
          name: 'Saturn',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=SA',
          score: 3.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Saturn is not highly ranked because multiple users have reported VPN kicks. It does not handle EAC as strongly as some better providers, and it is not really worth the price for most users based on the current reports.',
          tags: ['VPN Kick Reports', '3 Reports', 'Caution'],
          website: '',
          pros: ['Longer unban window than some alternatives'],
          cons: ['VPN kick reports', 'Overpriced', 'Not much better than many alternatives']
        },
        {
          name: 'Aqua',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=AQ',
          score: 1,
          verified: true,
          tier: 'C',
          category: 'Spoofers',
          description: 'Aqua is to be avoided. Reports include leaked drivers, detection, honeypots, VPN kicks, and long-duration bans. It has been flagged as one of the higher-risk options in the market.',
          tags: ['Detected Reports', 'VPN Kick', 'Ban Reports', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Leaked driver reports', 'Detection reports', 'Honeypot concerns', 'Ban reports']
        },
        {
          name: 'UB.GG',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=UB',
          score: 1,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'UB.GG is a very poor ranking. Users report slow dev work, poor spoofer quality, bad member treatment, scam concerns, and general inability to produce a proper product. It has low confidence overall.',
          tags: ['Detected Reports', 'Scam Reports', 'Ratting Reports', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Slow devs', 'Poor quality', 'Scam allegations', 'Low confidence']
        },
        {
          name: 'HWIDSpoofer.com',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=HW',
          score: 2.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'HWIDSpoofer.com is not recommended. The main reports include VPN kicks and repeated driver dumping, which creates a lot of instability and risk for users.',
          tags: ['VPN Kick', 'Driver Dump Reports', 'Caution'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'Driver dump reports']
        },
        {
          name: 'Exodus',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=EX',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Exodus has poor reports including VPN kicks, weak support, scam allegations, and concerns about the ownership and decision-making behind the project. It is not a provider that should be trusted without caution.',
          tags: ['VPN Kick', 'Poor Support', 'User Reports', 'Avoid'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'Poor support', 'Ownership concerns', 'High risk']
        },
        {
          name: 'AVM',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=AV',
          score: 1,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'AVM is extremely low priority. There are repeated reports of VPN kicks, ratting, and bootkit behavior. These allegations should be independently verified before they are taken as fact, but the provider has a very bad reputation.',
          tags: ['VPN Kick', 'Ratting Reports', 'Bootkit Reports', 'High Risk'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'Rat allegations', 'Bootkit concerns', 'High risk']
        },
        {
          name: 'Fatal',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=FA',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Fatal has a poor reputation tied to pasting, copied updates, and server instability. It is considered one of the more obvious low-trust providers in the spoofing scene.',
          tags: ['Pasting Reports', 'Poor Reputation', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Pasting reports', 'Poor reputation', 'Unstable infrastructure']
        },
        {
          name: 'Impact',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=IM',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Impact is avoided because of reports of detection, VPN kicks, bad unban behavior, and key sharing. It is not a provider with strong evidence behind it.',
          tags: ['Detected Reports', 'VPN Kick', 'Key Sharing', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'VPN kick reports', 'Unban issues', 'Key sharing']
        },
        {
          name: 'Venom Cheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=VE',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Venom Cheats has reports of detection and VPN kicks, which makes it a low-confidence option. It is not a provider that should be trusted without stronger evidence.',
          tags: ['Detected Reports', 'VPN Kick', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'VPN kick reports']
        },
        {
          name: 'Rebooted.lol',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=RE',
          score: 2.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Rebooted.lol is low ranked because of repeated VPN-kick reports. It may not be the safest or most reliable option, and the reports do not support high confidence.',
          tags: ['VPN Kick', 'Caution'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'Low confidence']
        },
        {
          name: 'Cheatloverz / Applecheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=CH',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Cheatloverz / Applecheats is low ranking because users report detection and poor reliability. It is not a provider worth trusting based on the current feedback.',
          tags: ['Detected Reports', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'Low reliability']
        },
        {
          name: 'Layre',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=LA',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Layre is associated with scam reports, detection, and VPN kicks. It is a provider to avoid unless more trustworthy evidence emerges.',
          tags: ['Scam Reports', 'Detected Reports', 'VPN Kick', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Scam reports', 'Detection reports', 'VPN kick reports']
        },
        {
          name: 'Bitchair / Bitcheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=BI',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Bitchair / Bitcheats is a low-ranking option because of repeated detection and VPN-kick reports. It should be treated as a riskier, low-confidence choice.',
          tags: ['Detected Reports', 'VPN Kick', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'VPN kick reports']
        },
        {
          name: 'Klar.gg',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=KL',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Klar.gg has poor reports involving detection, VPN kicks, and incorrect handling of serials. Token-logging allegations have also been reported, but those claims need independent verification before being treated as fact.',
          tags: ['Detected Reports', 'VPN Kick', 'Serial Concerns', 'Token Logging Allegation'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'VPN kick reports', 'Serial handling concerns', 'Security allegations']
        },
        {
          name: 'Zombie Cheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=ZO',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Zombie Cheats has negative reports tied to detection and VPN kicks. It is not seen as a stable or trustworthy option at the moment.',
          tags: ['Detected Reports', 'VPN Kick', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'VPN kick reports']
        },
        {
          name: 'VMax',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=VM',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'VMax is low-confidence because of repeated detection and VPN-kick reports. Users should approach it with caution.',
          tags: ['Detected Reports', 'VPN Kick', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'VPN kick reports']
        },
        {
          name: 'Temp X',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=TE',
          score: 2.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Temp X has reports of VPN kicks and poor reliability, which keeps its ranking low. It is not a highly recommended option.',
          tags: ['VPN Kick', 'Poor Performance', 'Caution'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'Reliability concerns']
        },
        {
          name: 'Carbon Perm',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=CA',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Carbon Perm has reports that invalid driver certificates trigger detection, and users also claim it is not truly permanent. Ban waves and detection concerns make it a poor recommendation.',
          tags: ['Detected Reports', 'Ban Wave Reports', 'Not Permanent', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports', 'Ban wave reports', 'Permanent claim concerns']
        },
        {
          name: 'Void Temp / Perm',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=VO',
          score: 1,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Void Temp / Perm is a very poor option based on reports of scam concerns, detection, poor performance, and VPN kicks. It is one of the higher-risk providers in this category.',
          tags: ['Scam Reports', 'VPN Kick', 'Avoid', 'High Risk'],
          website: '',
          pros: [],
          cons: ['Scam reports', 'VPN kick reports', 'Poor reliability']
        },
        {
          name: 'Void V2 Spoofer',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=VO',
          score: 1,
          verified: true,
          tier: 'D',
          category: 'Spoofers',
          description: 'Void V2 Spoofer is extremely dangerous to trust. There are multiple reports of scams, detection, delay kicks, and VPN kicks, and some users claim it is ratting-related. These allegations should be independently verified.',
          tags: ['Detected Reports', 'Delayed VPN Kick', 'Avoid'],
          website: 'https://pastebin.com/4ttbU32m',
          pros: [],
          cons: ['Scam reports', 'Detection reports', 'Delayed VPN kick reports', 'Ratting allegations']
        },
        {
          name: 'Divine',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=DI',
          score: 3,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Divine has a low rank because of recurring VPN-kick reports. It is not a strong recommendation if users want reliability.',
          tags: ['VPN Kick', 'Caution'],
          website: '',
          pros: [],
          cons: ['VPN kick reports']
        },
        {
          name: 'Sync.top V2',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=SY',
          score: 2.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Sync.top V2 has poor performance reports and repeated VPN-kick concerns. It is still far from what most users would call stable.',
          tags: ['VPN Kick', 'Poor Performance', 'Caution'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'Reliability concerns']
        },
        {
          name: 'Eservice Spoofer',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=ES',
          score: 2,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Eservice Spoofer is poor based on immediate VPN kicks rather than delay kicks. The provider is a high-risk option because the reports are severe and repeated.',
          tags: ['VPN Kick', 'Immediate Kick', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Immediate VPN kick reports']
        },
        {
          name: 'Clarity',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=CL',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Clarity is reported to be heavily detected. It is not a good choice for users looking for a stable or reliable spoofer.',
          tags: ['Detected Reports', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports']
        },
        {
          name: 'StealthVM',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=ST',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'StealthVM is considered very poor because of repeated detection reports. It is not a safe or stable recommendation.',
          tags: ['Detected Reports', 'Avoid'],
          website: '',
          pros: [],
          cons: ['Detection reports']
        },
        {
          name: 'SpoofHwid / Tateware',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=SP',
          score: 3,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'SpoofHwid / Tateware has low-report feedback and users report delayed VPN kicks. It is not a high-confidence provider and should be approached with caution.',
          tags: ['Low Reports', 'Delayed VPN Kick', 'Caution'],
          website: '',
          pros: [],
          cons: ['Limited feedback', 'Delayed VPN kick reports']
        },
        {
          name: 'Emulated.wtf / VIP',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=EM',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Emulated.wtf / VIP is poor because of reports of VPN kicks, DTC issues on some motherboards, delayed kicks, and possible exit-scam concerns. It is not a trustworthy option at the moment.',
          tags: ['VPN Kick', 'DTC Issues', 'Delayed Kick', 'Exit Scam Report'],
          website: '',
          pros: [],
          cons: ['VPN kick reports', 'DTC handling reports', 'Delayed kick reports', 'Exit scam allegation']
        },
        {
          name: 'Bettercheats',
          logo: 'https://placehold.co/160x160/171a22/ffffff?text=BT',
          score: 2.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Bettercheats is still not undetected, despite being better than some other providers. Reports include scam accusations and VPN kicks, which keeps it in the lower rankings.',
          tags: ['Scam Reports', 'VPN Kick', 'Still Not Undetected'],
          website: '',
          pros: ['Better than some alternatives'],
          cons: ['Scam reports', 'VPN kick reports', 'Still not undetected']
        },
        {
          name: 'ASX Software',
          logo: 'https://i.ibb.co/sdFJwjH9/image.png',
          score: 2.5,
          verified: true,
          tier: 'C',
          category: 'Spoofers',
          description: 'ASX Software has reports that it is a reseller-heavy, low-trust operation with potential RAT concerns. It is not fully trusted, and the reports are enough to keep it far from the top of the list.',
          tags: ['Reseller', 'Rat Report', 'Avoid'],
          website: 'https://asxsoftware.com',
          pros: ['Cheap', 'Many products'],
          cons: ['Reseller concerns', 'Rat allegations', 'Not trusted']
        }
      ]
    },
    {
      id: 'other',
      name: 'Other',
      description: 'Other provider rankings.',
      providers: [
        {
          name: "Common's VBX",
          logo: 'https://files.catbox.moe/el2sqc.png',
          score: 10,
          verified: true,
          tier: 'S',
          category: 'Other',
          description: 'The best shop to get Vbucks for cheap. They have many methods and can gift anything with very low risk.',
          tags: ['vbucks'],
          website: 'https://discord.gg/2gm9Cxzu9a',
          pros: ['Instant delivery', 'Cheap', 'Simple'],
          cons: []
        },
        {
          name: 'CoreMotion Macro',
          logo: 'https://files.catbox.moe/bo7t1k.png',
          score: 10,
          verified: true,
          tier: 'S',
          category: 'Other',
          description: 'One of the best up-and-coming macros for Fortnite. It is simple, fast, and has many features, with no ban reports tied to it by the current data.',
          tags: ['Macro'],
          website: 'https://discord.gg/jm2a2YjcnN',
          pros: ['Instant delivery', 'Cheap', 'Simple', 'Undetected and easy to use'],
          cons: []
        }
      ]
    }
  ]
};

const $ = (id) => document.getElementById(id);
let currentTab = 'main';

function getAllProviders() {
  return SITE_DATA.tabs.flatMap((tab) => (tab.providers || []).map((provider) => ({ ...provider, _tabId: tab.id })));
}

function getTab() {
  return SITE_DATA.tabs.find((tab) => tab.id === currentTab) || SITE_DATA.tabs[0];
}

function getProviders() {
  return currentTab === 'all' ? getAllProviders() : (getTab().providers || []);
}

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function tierFor(provider) {
  if (provider.tier) return provider.tier;
  if (provider.score >= 9.5) return 'S';
  if (provider.score >= 9) return 'A';
  if (provider.score >= 8) return 'B';
  return 'C';
}

function rankingData() {
  return getProviders()
    .map((provider, index) => ({ ...provider, _i: index }))
    .sort((a, b) => b.score - a.score);
}

function categories() {
  return [...new Set(getProviders().map((provider) => provider.category).filter(Boolean))].sort();
}

function renderTabs() {
  const tabs = SITE_DATA.tabs.map((tab) => `
    <button class="menu-tab ${tab.id === currentTab ? 'active' : ''}" onclick="switchTab('${tab.id}')">
      <span>${esc(tab.name)}</span>
      <span class="menu-tab-count">${tab.providers.length}</span>
    </button>
  `).join('');

  $('menuTabs').innerHTML = tabs;
}

function renderCategories() {
  const catOptions = '<option value="">All categories</option>' + categories().map((category) => `<option>${esc(category)}</option>`).join('');

  $('category').innerHTML = catOptions;
  $('count').textContent = String(getProviders().length);
  $('cats').textContent = String(categories().length);
  $('date').textContent = SITE_DATA.lastUpdated;
}

function render() {
  const query = $('search').value.toLowerCase().trim();
  const selectedCategory = $('category').value;
  const sortMode = $('sort').value;

  let items = rankingData().filter((provider) => {
    const haystack = [provider.name, provider.category, provider.description, ...(provider.tags || [])].join(' ').toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = !selectedCategory || provider.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  if (sortMode === 'score') {
    items.sort((a, b) => b.score - a.score);
  }

  if (sortMode === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  $('resultText').textContent = `Showing ${items.length} of ${getProviders().length}`;

  if (!items.length) {
    $('grid').innerHTML = '<div class="empty">No providers have been added to this tab yet.</div>';
    return;
  }

  const leaderboard = rankingData();

  $('grid').innerHTML = items.map((provider) => {
    const rank = leaderboard.findIndex((item) => item.name === provider.name && item.logo === provider.logo) + 1;
    const tier = tierFor(provider);

    return `
      <article class="card">
        <div class="rankline">
          <span class="rank">#${rank}</span>
          <span class="tier tier-${tier}">TIER ${tier}</span>
        </div>
        <img class="logo" src="${esc(provider.logo)}" alt="${esc(provider.name)}" onerror="this.style.visibility='hidden'">
        <div class="name-row">
          <span class="name">${esc(provider.name)}</span>
          ${provider.verified ? '<span class="verified">✓ VERIFIED</span>' : ''}
        </div>
        <div class="desc">${esc(provider.description)}</div>
        <div class="tags">${(provider.tags || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}</div>
        <div class="score-row">
          <div class="score">${Number(provider.score).toFixed(1)} <small>/ 10</small></div>
          <button class="view" onclick="openProvider(${provider._i})">VIEW PROFILE →</button>
        </div>
        <div class="bar"><i style="width:${Math.min(100, Math.max(0, provider.score * 10))}%"></i></div>
      </article>
    `;
  }).join('');
}

function openProvider(index, updateHash = true) {
  const provider = getProviders()[index];
  if (!provider) return;

  const tier = tierFor(provider);

  if (updateHash) {
    history.pushState(null, '', `#${currentTab}/${slugify(provider.name)}`);
  }

  $('detail').innerHTML = `
    <div class="detail-head">
      <img class="logo" src="${esc(provider.logo)}" alt="${esc(provider.name)}" onerror="this.style.visibility='hidden'">
      <div>
        <div class="detail-name">${esc(provider.name)}</div>
        <div class="tier tier-${tier}" style="display:inline-block;margin-top:8px">TIER ${tier}</div>
      </div>
    </div>
    <div class="detail-score">${Number(provider.score).toFixed(1)} <small style="font-size:13px;color:#8991a0">/ 10</small></div>
    <p class="detail-text">${esc(provider.description)}</p>
    ${provider.name.toLowerCase() === 'void v2 spoofer' ? '<a href="https://pastebin.com/4ttbU32m" target="_blank" rel="noopener noreferrer" class="nav-btn" style="display:inline-block;margin-top:12px">VIEW PROOF ↗</a>' : ''}
    <div class="tags">${(provider.tags || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}</div>
    <div class="detail-grid">
      <div class="detail-box"><b>Category</b><span>${esc(provider.category || 'Uncategorised')}</span></div>
      <div class="detail-box"><b>Status</b><span>${provider.verified ? 'Verified' : 'Unverified'}</span></div>
      <div class="detail-box"><b>Pros</b><span>${(provider.pros || []).map((item) => esc(item)).join(' · ') || '—'}</span></div>
      <div class="detail-box"><b>Cons</b><span>${(provider.cons || []).map((item) => esc(item)).join(' · ') || '—'}</span></div>
    </div>
    ${provider.website ? `<p style="margin-top:18px"><a class="nav-btn" href="${esc(provider.website)}" target="_blank" rel="noopener">Visit provider ↗</a></p>` : ''}
  `;

  $('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('overlay').classList.remove('open');
  document.body.style.overflow = '';
  history.pushState(null, '', location.pathname + location.search);
}

function closeIfBackdrop(event) {
  if (event.target.id === 'overlay') closeModal();
}

function ensureRankingsView() {
  const methodPage = document.getElementById('methodPage');
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (methodPage) methodPage.classList.remove('active');
  if (mainEl) mainEl.style.display = '';
  if (footerEl) footerEl.style.display = '';
}

function scrollToRankings() {
  ensureRankingsView();
  const rankingSection = document.getElementById('rankingSection');
  if (rankingSection) {
    rankingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function openMethodology() {
  ensureRankingsView();
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (mainEl) mainEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'none';
  document.getElementById('methodPage').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeMethodology() {
  document.getElementById('methodPage').classList.remove('active');
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  if (mainEl) mainEl.style.display = '';
  if (footerEl) footerEl.style.display = '';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showAll() {
  ensureRankingsView();
  currentTab = 'all';
  $('search').value = '';
  $('category').value = '';
  $('sort').value = 'rank';
  $('tabDescription').textContent = 'A full leaderboard covering every provider across all tabs.';
  $('leaderboardTitle').textContent = 'All Providers';
  renderTabs();
  renderCategories();
  render();
  scrollToRankings();
}

function toggleMenu() {
  $('sideMenu').classList.toggle('open');
  $('menuBackdrop').classList.toggle('open');
}

function switchTab(id) {
  const tab = SITE_DATA.tabs.find((item) => item.id === id);
  if (!tab) return;

  currentTab = id;
  $('search').value = '';
  $('category').value = '';
  $('sort').value = 'rank';
  $('tabDescription').textContent = tab.description;
  $('leaderboardTitle').textContent = `${tab.name} Leaderboard`;

  renderTabs();
  renderCategories();
  render();
  toggleMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openFromHash() {
  const hash = location.hash.replace(/^#/, '');
  if (!hash) return;

  const [tabId, slug] = hash.split('/');
  const tab = SITE_DATA.tabs.find((item) => item.id === tabId);
  if (!tab) return;

  currentTab = tabId;
  $('tabDescription').textContent = tab.description;
  $('leaderboardTitle').textContent = `${tab.name} Leaderboard`;
  renderTabs();
  renderCategories();
  render();

  const targetIndex = tab.providers.findIndex((provider) => slugify(provider.name) === slug);
  if (targetIndex > -1) openProvider(targetIndex, false);
}

window.addEventListener('hashchange', openFromHash);
$('search').addEventListener('input', render);
$('category').addEventListener('change', render);
$('sort').addEventListener('change', render);

function closePromo() {
  const promo = document.getElementById('promoOverlay');
  if (promo) promo.style.display = 'none';
  document.body.style.overflow = '';
}

document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.add('loaded');
  }, 350);
});

renderTabs();
renderCategories();
render();
openFromHash();

window.addEventListener('click', (event) => {
  const clickable = event.target.closest('button, a, .card');
  if (!clickable) return;

  const sound = document.getElementById('clickSound');
  if (!sound) return;

  sound.currentTime = 0;
  sound.play().catch(() => {});
});
