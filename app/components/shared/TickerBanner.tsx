export function TickerBanner() {
  const messages = [
    'CLINICAL DOSES',
    'ZERO PROPRIETARY BLENDS',
    'VEGAN + NON-GMO',
    'GMP-CERTIFIED EU MADE',
    '30-DAY MONEY-BACK GUARANTEE',
    '\u20AC2 PER SERVING',
    '11 ACTIVE INGREDIENTS',
    'THIRD-PARTY TESTED',
    '5 ADAPTOGENIC MUSHROOMS',
    'CEREMONIAL MATCHA',
  ];

  // Triple for seamless loop on wide screens
  const allMessages = [...messages, ...messages, ...messages];

  return (
    <div className="overflow-hidden bg-cream-800 py-8" role="marquee" aria-label="SMUSH product highlights">
      <div className="ticker whitespace-nowrap">
        {allMessages.map((message, index) => (
          <span key={index} className="inline-flex items-center mx-8">
            <span className="text-cream-100 font-normal uppercase tracking-widest text-xs">
              {message}
            </span>
            <span className="ml-8 text-cream-500 text-xs select-none" aria-hidden="true">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
