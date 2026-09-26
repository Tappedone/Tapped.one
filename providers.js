const SITE_DATA = {
  lastUpdated: '9/26/2026',
  tabs: [
    {
      id: 'fortnite',
      name: 'Fortnite',
      description: 'Fortnite cheat provider rankings.',
      providers: [
        {
          name: "GhostVisor",
          logo: "https://files.catbox.moe/zc9xn1.png",
          score: 8,
          verified: false,
          tier: "A",
          category: "Premium",
          description: "GhostVisor has some of the best developers out there. Their Fortnite internal is based on a hypervisor (hence the name GhostVisor), which explains why it’s such a solid choice. The rating is based solely on their vouches. However, the prices are insanely high (€180 for a month).",
          tags: ["Reliable", "Hypervisor", "Expensive", "Internal", "Slotted", "Tourneys supported"],
          website: "https://www.elitepvpers.com/forum/fortnite-trading/5317265-ghostvisor-private-undetected-high-quality.html",
          pros: ["Insane support", "Good for legit cheating and tourneys"],
          cons: ["Can be expensive"]
        },
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
          logo: 'https://files.catbox.moe/707996.png',
          score: 8.5,
          verified: true,
          tier: 'S',
          category: 'Premium',
          description: 'Vixen is an internal cheat packed with silent-aim features and low pricing. It is known for bypassing EAC and UAC, although update speed can be inconsistent at times.',
          tags: ['Spoofer', 'Cheats', 'DMA', 'Fortnite'],
          website: 'https://discord.gg/vixencommunity',
          pros: ['Multiple products', 'Cheap', 'Easy to use', 'Public'],
          cons: ['Updates can take time']
        }
      ]
    },

    {
      id: 'main',
      name: 'Main',
      description: 'A premium public leaderboard for cheat and spoofer providers.',
      providers: [

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


          
          name: 'Reported.lol',
          logo: 'https://files.catbox.moe/cf381y.png',
          score: 7,
          verified: true,
          tier: 'A',
          category: 'Premium',
          description: 'Reported is the most known temporary HWID spoofer on the market. The developer(s) have a long-lasting reputation dating back many years. It remains under watch because some users still report low-report bans and occasional VPN kicks, but it is still one of the stronger options in the space.',
          tags: ['Spoofer', 'Popular', 'Under Watch'],
          website: 'https://reported.lol/',
          pros: ['Temporary spoofer', 'One-click', 'Strong reputation', 'Easy to use'],
          cons: ['Unstable on EAC', 'Needs continued monitoring']
        },
        {
          name: 'VERSE',
          logo: 'https://verse-solutions.com/img/Verselogo-thumb.png',
          score: 8,
          verified: true,
          tier: 'A',
          category: 'Premium',
          description: 'Verse is a known temporary and permanent HWID spoofer. It has a long reputation in the scene and is widely recognized for its permanent spoofer offering. It is currently under heavy scrutiny due to downtime and some scam concerns, but it remains a commonly discussed provider.',
          tags: ['Spoofer', 'Down', 'Known Provider'],
          statusText: 'Down due to lawsuit',
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
          description: 'Joony Software is a permanent HWID spoofer that has been running since 2023. It has a paid version and is widely regarded as cheap and relatively reliable. Support can be slow at times, but the product still stands out in value and reputation. **Currently has no ban reports. **',
          tags: ['Top Pick', 'Spoofer', 'Reliable', 'Value'],
          website: 'https://joonysoftware.xyz',
          pros: ['Cheap', 'Reliable', 'Good support', 'Strong value'],
          cons: ['Support can be slow']
        },
        {
          name: 'Vixen | Temp Spoofer',
          logo: 'https://files.catbox.moe/707996.png',
          score: 8,
          verified: true,
          tier: 'S',
          category: 'Value',
          description: 'Vixen is known for their undetected internal product. Their temporary spoofer has been tested and can work well for lifetime users, though it has also been reported to crash occasionally. It is still a decent option for users who want a lower-cost, temporary solution.',
          tags: ['Top Pick', 'Spoofer', 'Reliable', 'Temporary'],
          statusText: 'Limited to lifetime users',
          website: 'https://discord.gg/ushxtVcwtF',
          pros: ['Undetected potential', 'Temporary option', 'Good support', 'Strong reputation'],
          cons: ['Can crash', 'Not fully stable on every setup']
        }
      ]
    },

    {
      id: 'other',
      name: 'Other',
      description: 'Other provider rankings.',
      providers: [
        {
          name: 'CoreMotion Macro',
          logo: 'https://files.catbox.moe/bo7t1k.png',
          score: 10,
          verified: true,
          tier: 'S',
          category: 'Others',
          description: 'One of the best up-and-coming macros for Fortnite. It is simple, fast, and has many features, with no ban reports tied to it by the current data.',
          tags: ['Macro'],
          website: 'https://discord.gg/jm2a2YjcnN',
          pros: ['Instant delivery', 'Cheap', 'Simple', 'Undetected and easy to use'],
          cons: []
        }
      ]
    },

    {
      id: 'spoofers',
      name: 'Spoofers',
      description: 'HWID spoofer rankings.',
      providers: [
        {
          name: 'Reported.lol',
          logo: 'https://files.catbox.moe/cf381y.png',
          score: 7,
          verified: true,
          tier: 'A',
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
          score: 8,
          verified: true,
          tier: 'A',
          category: 'Premium',
          description: 'Verse is a known temporary and permanent HWID spoofer. It has a long reputation in the scene and is widely recognized for its permanent spoofer offering. It is currently under heavy scrutiny due to downtime and some scam concerns, but it remains a commonly discussed provider.',
          tags: ['Spoofer', 'Popular', 'Known Provider'],
          statusText: 'Down due to lawsuit',
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
          score: 8,
          verified: true,
          tier: 'S',
          category: 'Value',
          description: 'Vixen is known for their undetected internal product. Their temporary spoofer has been tested and can work well for lifetime users, though it has also been reported to crash occasionally. It is still a decent option for users who want a lower-cost, temporary solution.',
          tags: ['Top Pick', 'Spoofer', 'Reliable', 'Temporary'],
          statusText: 'Limited to lifetime users',
          website: 'https://discord.gg/ushxtVcwtF',
          pros: ['Undetected potential', 'Temporary option', 'Good support', 'Strong reputation'],
          cons: ['Can crash', 'Not fully stable on every setup']
        },

        {
          name: 'Redware',
          logo: 'https://files.catbox.moe/1nbx2n.png',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Redware has a very poor reputation. There is little positive feedback, and it is generally known for poor detection handling. It is not a provider most users should trust based on the current reports.',
          tags: ['Poor Feedback', 'Avoid', 'Low Rated'],
          website: 'https://redware.cc/discord',
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
          logo: 'https://trumpware.org/storage/images/1117227.webp',
          score: 1.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Trumpware is not recommended. Reports include scam allegations and frequent VPN kicks, and there is not enough positive evidence to justify trust in the provider.',
          tags: ['Avoid', 'VPN Kick Reports', 'Scam Reports', 'High Risk'],
          website: 'https://trumpware.org/',
          pros: [],
          cons: ['Scam reports', 'VPN kick reports', 'Low confidence']
        },

        {
          name: 'Echo / Focus',
          logo: 'https://files.catbox.moe/lqr2mb.png',
          score: 2.9,
          verified: true,
          tier: 'C',
          category: 'Premium',
          description: 'Echo / Focus is tied to exit-scamming behavior and is known for not delivering products or accounts when challenged. The owner has also reportedly bought members and manipulated the community around the service.',
          tags: ['Avoid', 'Scam Reports', 'High Risk'],
          website: 'https://focuscheats.org/',
          pros: [],
          cons: ['Scam reports', 'Exit scam concerns', 'Low confidence']
        },

        {
          name: 'Saturn',
          logo: 'https://files.catbox.moe/fbfoki.gif',
          score: 3.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'Saturn is not highly ranked because multiple users have reported VPN kicks. It does not handle EAC as strongly as some better providers, and it is not really worth the price for most users based on the current reports.',
          tags: ['VPN Kick Reports', '3 Reports', 'Caution'],
          website: 'https://saturnspoofer.com/',
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
          logo: 'https://files.catbox.moe/qngy3y.webp',
          score: 1,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'UB.GG is a very poor ranking. Users report slow dev work, poor spoofer quality, bad member treatment, scam concerns, and general inability to produce a proper product. It has low confidence overall.',
          tags: ['Detected Reports', 'Scam Reports', 'Ratting Reports', 'Avoid'],
          website: 'https://unbanned.gg/',
          pros: [],
          cons: ['Slow devs', 'Poor quality', 'Scam allegations', 'Low confidence']
        },

        {
          name: 'HWIDSpoofer.com',
          logo: 'https://files.catbox.moe/2outs6.jpg',
          score: 2.5,
          verified: false,
          tier: 'C',
          category: 'Spoofers',
          description: 'HWIDSpoofer.com is not recommended. The main reports include VPN kicks and repeated driver dumping, which creates a lot of instability and risk for users.',
          tags: ['VPN Kick', 'Driver Dump Reports', 'Caution'],
          website: 'https://hwidspoofer.com/',
          pros: [],
          cons: ['VPN kick reports', 'Driver dump reports']
        }
      ]
    },

    {
      id: 'val',
      name: 'Valorant',
      description: 'Valorant provider rankings.',
      providers: [
        {
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
        },
        {
          name: 'Eon',
          logo: 'https://files.catbox.moe/apuvrg.webp',
          score: 7,
          verified: false,
          tier: 'A',
          category: 'Valorant',
          description: 'Eon has built a positive reputation among users, with no ban reports or significant issues reported to me at this time. Its pricing is also considered competitive for the features and products offered.',
          tags: ['Multi-Provider', 'Good Pricing'],
          website: 'https://eon.wtf/',
          pros: ['Multi-provider', 'Good pricing'],
          cons: []
        }
      ]
    }
  ]
};

