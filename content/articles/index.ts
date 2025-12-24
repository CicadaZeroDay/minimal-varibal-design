export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    slug: 'beauty-salon-case-study-lost-clients-to-competitors',
    title: 'How Sarah\'s Beauty Salon Stopped Losing £4,200/Month to Competitors',
    description: 'A London salon owner was watching clients book with rivals while she was busy with appointments. Here\'s how she turned it around in 30 days.',
    content: `
      <h2>The Nightmare: Watching Clients Walk Away</h2>
      <p>Sarah Chen had built her beauty salon in Notting Hill over 8 years. Loyal clients, five-star reviews, a reputation for the best balayage in West London. But something was slowly killing her business.</p>

      <p><strong>"I'd finish with a client, check my phone, and see 4 missed calls,"</strong> Sarah recalls. <strong>"When I'd call back, half of them had already booked elsewhere. One woman told me straight: 'I needed my nails done for a wedding tomorrow. You didn't answer, so I went to the salon next door.'"</strong></p>

      <p>The pain was real:</p>
      <ul>
        <li>12-15 missed calls every single day</li>
        <li>Clients openly saying they booked with competitors</li>
        <li>Evening and weekend enquiries going completely unanswered</li>
        <li>New clients never calling back after hitting voicemail</li>
      </ul>

      <h2>What Sarah Tried (And Why It Failed)</h2>

      <p><strong>Attempt #1: Hiring a part-time receptionist</strong></p>
      <p>Cost: £1,400/month. Result: Still missing calls during lunch, evenings, and her days off. Plus the receptionist quit after 3 months.</p>

      <p><strong>Attempt #2: Answering calls between clients</strong></p>
      <p>Result: Rushed conversations, booking errors, and clients in the chair feeling ignored. <em>"My regulars started complaining I wasn't focused on them anymore."</em></p>

      <p><strong>Attempt #3: Online booking system</strong></p>
      <p>Result: Her older clients (her best spenders) refused to use it. <em>"They want to talk to someone. They have questions. They're not going to figure out an app."</em></p>

      <h2>The Turning Point: AI That Sounds Human</h2>
      <p>In September 2024, Sarah discovered No Missed Calls through a fellow salon owner. Skeptical but desperate, she signed up for a demo.</p>

      <p><strong>"I called my own salon pretending to be a customer. The AI answered on the first ring. It knew my services, my prices, my availability. It booked the appointment and I got a text confirmation. I was genuinely shocked."</strong></p>

      <h2>The Results: 30 Days Later</h2>

      <div style="background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(139,92,246,0.1)); padding: 24px; border-radius: 12px; margin: 24px 0;">
        <p style="font-size: 24px; font-weight: bold; margin: 0; color: #0066FF;">Before:</p>
        <ul style="margin: 16px 0;">
          <li>68 bookings/month</li>
          <li>12-15 missed calls/day</li>
          <li>£8,160 monthly revenue</li>
        </ul>
        <p style="font-size: 24px; font-weight: bold; margin: 24px 0 0 0; color: #10B981;">After:</p>
        <ul style="margin: 16px 0 0 0;">
          <li>103 bookings/month (+51%)</li>
          <li>0 missed calls</li>
          <li>£12,360 monthly revenue (+£4,200)</li>
        </ul>
      </div>

      <p><strong>Key wins:</strong></p>
      <ul>
        <li><strong>Evening bookings exploded:</strong> 31% of new bookings came after 6pm when Sarah used to be closed</li>
        <li><strong>Weekend enquiries captured:</strong> 22 bookings from Sunday callers who would have gone elsewhere</li>
        <li><strong>Client satisfaction up:</strong> No more holding, no more voicemail, instant booking confirmation</li>
        <li><strong>Sarah's stress down:</strong> <em>"I can actually focus on the client in my chair now. The phone isn't my enemy anymore."</em></li>
      </ul>

      <h2>The ROI Breakdown</h2>
      <p>Sarah pays £399/month for No Missed Calls. Her additional revenue: £4,200/month.</p>
      <p><strong>That's a 10.5x return on investment.</strong></p>

      <p><em>"I was spending £1,400 on a part-time receptionist who still missed calls. Now I spend £399 on an AI that never misses a single one. The maths was obvious."</em></p>

      <h2>Is Your Salon Bleeding Clients Too?</h2>
      <p>If you're missing calls while you're with clients, you're losing bookings to competitors right now. Every unanswered call is a client who might never call back.</p>

      <p><strong>Get a free demo call from Sophie, our AI receptionist.</strong> See exactly how she handles bookings, answers questions, and sounds completely natural. Takes 30 seconds.</p>
    `,
    author: 'NMC Team',
    publishedAt: '22 December 2024',
    category: 'Case Studies',
    tags: ['beauty salon', 'case study', 'missed calls', 'London', 'ROI'],
    featuredImage: '/blog/beauty-salon.jpg',
    readTime: '6 min read'
  },
  {
    slug: 'dental-practice-case-study-emergency-calls',
    title: 'Oakwood Dental Was Missing Emergency Calls — Then Revenue Jumped 34%',
    description: 'A Manchester dental practice was losing high-value emergency patients to competitors. One change brought in £18,000 extra per month.',
    content: `
      <h2>The Fear: Patients in Pain, Calling Your Competitors</h2>
      <p>Dr. James Hartley had a terrible realisation one Monday morning. A long-time patient came in for a routine check-up and casually mentioned: <strong>"I cracked my tooth last Saturday. Called you but got voicemail, so I went to that emergency dentist on Oxford Road."</strong></p>

      <p>That "emergency dentist" charged £450 for the same treatment James would have done. His patient paid more, got worse care, and James lost the revenue. But that wasn't the worst part.</p>

      <p><strong>"I checked our phone records,"</strong> James recalls. <strong>"We were getting 8-12 calls every weekend. All going to voicemail. All potential emergencies. I felt sick."</strong></p>

      <p>The numbers were brutal:</p>
      <ul>
        <li>Average emergency treatment value: £380</li>
        <li>Weekend missed calls: 40+ per month</li>
        <li>Estimated monthly loss: £15,200+ (assuming 40% would book)</li>
        <li>Weekday after-hours calls: another 25+ missed</li>
      </ul>

      <h2>The Failed Solutions</h2>

      <p><strong>Attempt #1: Emergency mobile phone</strong></p>
      <p>James gave his personal number to patients for emergencies. Result: Calls at 2am that weren't emergencies. Burnout. His wife threatening divorce. Abandoned after 2 months.</p>

      <p><strong>Attempt #2: Outsourced call centre</strong></p>
      <p>Cost: £800/month. Result: Callers complained about thick accents, long hold times, and operators who couldn't answer basic questions about treatments. Several patients left negative reviews mentioning "unprofessional phone service."</p>

      <p><strong>Attempt #3: "Call back Monday" voicemail</strong></p>
      <p>Result: Patients in pain don't wait until Monday. They Google "emergency dentist near me" and book elsewhere. Those patients often don't come back.</p>

      <h2>The Solution That Actually Worked</h2>
      <p>In October 2024, James implemented No Missed Calls with a custom script for dental emergencies. The AI was trained to:</p>
      <ul>
        <li>Identify genuine emergencies (severe pain, swelling, knocked-out tooth)</li>
        <li>Book same-day or next-day emergency slots</li>
        <li>Send James a priority SMS for true emergencies</li>
        <li>Answer questions about costs, NHS vs private options, and what to do while waiting</li>
      </ul>

      <p><strong>"The first weekend, I got a text at 9pm Saturday: 'Emergency booking made for Sarah Thompson, cracked molar, severe pain, booked for 9am Monday.' I could relax knowing she was handled."</strong></p>

      <h2>The 90-Day Results</h2>

      <div style="background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(139,92,246,0.1)); padding: 24px; border-radius: 12px; margin: 24px 0;">
        <p style="font-size: 24px; font-weight: bold; margin: 0; color: #0066FF;">Before:</p>
        <ul style="margin: 16px 0;">
          <li>Monthly revenue: £52,000</li>
          <li>Emergency appointments: 12/month</li>
          <li>After-hours bookings: 0</li>
          <li>New patient enquiries answered: ~60%</li>
        </ul>
        <p style="font-size: 24px; font-weight: bold; margin: 24px 0 0 0; color: #10B981;">After:</p>
        <ul style="margin: 16px 0 0 0;">
          <li>Monthly revenue: £70,000 (+34%)</li>
          <li>Emergency appointments: 31/month (+158%)</li>
          <li>After-hours bookings: 47/month</li>
          <li>New patient enquiries answered: 100%</li>
        </ul>
      </div>

      <p><strong>Breakdown of the £18,000 monthly increase:</strong></p>
      <ul>
        <li>Additional emergency treatments: £7,220</li>
        <li>New patient conversions (previously missed): £6,840</li>
        <li>Hygienist bookings from after-hours calls: £3,940</li>
      </ul>

      <h2>The Unexpected Benefit: Staff Morale</h2>
      <p>Dr. Hartley's receptionist, Linda, was drowning in calls before. <strong>"She was answering 60+ calls a day, getting stressed, making booking errors. Now No Missed Calls handles the overflow and after-hours. Linda focuses on patients in the practice. She's happier, we have fewer scheduling mistakes, and patients in the waiting room get actual attention."</strong></p>

      <h2>The Investment vs. Return</h2>
      <p>No Missed Calls cost for Oakwood Dental: £399/month + one-time £450 setup.</p>
      <p>Additional monthly revenue: £18,000.</p>
      <p><strong>ROI: 45x in the first month alone.</strong></p>

      <h2>Are You Losing Emergency Patients?</h2>
      <p>Dental emergencies don't wait for business hours. Every weekend call that goes to voicemail is a patient in pain who will find another dentist — and maybe never come back.</p>

      <p><strong>Request a demo call and hear exactly how our AI handles dental enquiries.</strong> It takes 30 seconds, and you'll understand why practices across the UK are switching.</p>
    `,
    author: 'NMC Team',
    publishedAt: '20 December 2024',
    category: 'Case Studies',
    tags: ['dental practice', 'case study', 'emergency calls', 'Manchester', 'healthcare'],
    featuredImage: '/blog/dental-practice.jpg',
    readTime: '7 min read'
  },
  {
    slug: 'auto-repair-shop-case-study-missed-calls',
    title: 'Mike\'s Auto Repair Was Losing £2,100 Weekly to Unanswered Calls',
    description: 'A Birmingham mechanic couldn\'t answer phones while under cars. He was losing 60% of new customer calls — until he found a solution.',
    content: `
      <h2>The Problem: You Can't Answer Phones From Under a Car</h2>
      <p>Mike Reynolds has been a mechanic for 22 years. He knows engines inside out. What he didn't know was how much business he was losing.</p>

      <p><strong>"I'm under a car, covered in oil, the phone rings. What am I supposed to do? Slide out, wipe my hands, run to the phone? By the time I get there, they've hung up."</strong></p>

      <p>Mike had two mechanics working with him. All three of them had the same problem: when you're working, you can't answer calls. And in auto repair, you're always working.</p>

      <p>The reality was harsh:</p>
      <ul>
        <li>35-40 calls per day to the shop</li>
        <li>Only 15-18 answered (less than 50%)</li>
        <li>Average job value: £340</li>
        <li>New customer calls missed: 8-10 per day</li>
        <li>Estimated weekly loss: £2,100+ in new business</li>
      </ul>

      <p><strong>"My wife looked at the phone records one night and asked why I even bother having a phone line. That hurt."</strong></p>

      <h2>Everything Mike Tried (And Failed)</h2>

      <p><strong>Attempt #1: Hiring his wife part-time</strong></p>
      <p>She answered phones for 4 hours a day. Problem: The other 8+ hours were still unmanned. Plus she wasn't trained on car issues — couldn't answer basic questions like "do you work on BMWs?" or "how much for a brake check?"</p>

      <p><strong>Attempt #2: Bluetooth headset while working</strong></p>
      <p>Result: Tried answering while under a car. Customer heard clanging, asked "is everything okay?" Mike sounded distracted (because he was), and the customer didn't book. Plus the headset kept falling off.</p>

      <p><strong>Attempt #3: Letting it go to voicemail with callback promise</strong></p>
      <p>Brutal truth: 80% of callers don't leave voicemails. They just call the next garage in the Google results. <em>"I'd call back numbers from missed calls and hear 'oh, I already booked somewhere else.' Every single time."</em></p>

      <h2>How No Missed Calls Changed Everything</h2>
      <p>A customer told Mike about No Missed Calls in November 2024. <strong>"He said, 'Mate, I just called your shop and an AI booked me in. That's brilliant.' I had no idea what he was talking about — my wife had set it up as a surprise."</strong></p>

      <p>The AI was trained on Mike's specific services:</p>
      <ul>
        <li>MOTs, servicing, brake repairs, diagnostics</li>
        <li>Which car makes they work on (all major brands)</li>
        <li>Pricing for common jobs</li>
        <li>Availability in their booking system</li>
        <li>Location and opening hours</li>
      </ul>

      <p><strong>"I tested it myself. Called and said my BMW was making a grinding noise when braking. The AI asked a few questions, said it sounded like brake pads, quoted me the right price, and offered me a slot for Thursday morning. All in about 90 seconds."</strong></p>

      <h2>The Numbers After 60 Days</h2>

      <div style="background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(139,92,246,0.1)); padding: 24px; border-radius: 12px; margin: 24px 0;">
        <p style="font-size: 24px; font-weight: bold; margin: 0; color: #0066FF;">Before:</p>
        <ul style="margin: 16px 0;">
          <li>Calls answered: 47%</li>
          <li>New customers/week: 8</li>
          <li>Weekly revenue: £11,200</li>
          <li>Lost calls going to competitors: 20+/day</li>
        </ul>
        <p style="font-size: 24px; font-weight: bold; margin: 24px 0 0 0; color: #10B981;">After:</p>
        <ul style="margin: 16px 0 0 0;">
          <li>Calls answered: 100%</li>
          <li>New customers/week: 14 (+75%)</li>
          <li>Weekly revenue: £14,280 (+£3,080)</li>
          <li>Lost calls: 0</li>
        </ul>
      </div>

      <p><strong>Monthly revenue increase: £12,320</strong></p>
      <p><strong>Annual projected increase: £147,840</strong></p>

      <h2>The Best Part: Focus on the Work</h2>
      <p><strong>"I'm a mechanic, not a receptionist. Now I can focus on fixing cars. The AI handles the calls, books the jobs, sends me a summary. I look at my schedule in the morning and just crack on."</strong></p>

      <p>Additional benefits Mike noticed:</p>
      <ul>
        <li><strong>After-hours bookings:</strong> 23% of bookings now come from calls after 5pm</li>
        <li><strong>No more callback stress:</strong> Used to spend lunch breaks returning calls. Now that time is free.</li>
        <li><strong>Professional image:</strong> "Customers say we sound like a proper professional outfit now. Not a bloke fumbling for his phone with oily hands."</li>
        <li><strong>Weekend emergencies:</strong> The AI captures Saturday calls for Monday scheduling</li>
      </ul>

      <h2>The Simple Maths</h2>
      <p>No Missed Calls cost: £399/month</p>
      <p>Additional revenue: £12,320/month</p>
      <p><strong>Return on investment: 31x</strong></p>

      <p><em>"Best business decision I've made in 22 years. And I didn't even make it — my wife did."</em></p>

      <h2>Is Your Garage Missing Calls Too?</h2>
      <p>If you're a mechanic, you know the problem. Phone rings, you're busy, customer calls someone else. It happens 10, 20, 30 times a day across the UK.</p>

      <p><strong>Get a free demo call from our AI.</strong> Pretend you're a customer with a car problem. You'll hear exactly how it sounds, how it books, and why garages across Britain are switching. 30 seconds is all it takes.</p>
    `,
    author: 'NMC Team',
    publishedAt: '18 December 2024',
    category: 'Case Studies',
    tags: ['auto repair', 'garage', 'case study', 'Birmingham', 'mechanics', 'missed calls'],
    featuredImage: '/blog/auto-repair.jpg',
    readTime: '8 min read'
  },
  {
    slug: 'missed-calls-cost-uk-business',
    title: 'How Much Do Missed Calls Cost UK Businesses?',
    description: 'Every missed call costs your business £47 on average. Learn how to calculate your real revenue loss and what you can do about it.',
    content: `
      <h2>The Hidden Cost of Missed Calls</h2>
      <p>For most UK small businesses, the phone is still the primary way customers book appointments and make enquiries. Yet research shows that <strong>62% of calls to small businesses go unanswered</strong>.</p>

      <p>Each of those missed calls represents a potential customer who:</p>
      <ul>
        <li>Wanted to book an appointment</li>
        <li>Had questions about your services</li>
        <li>Was ready to spend money</li>
      </ul>

      <h2>Calculating Your Loss</h2>
      <p>The average booking value across UK service businesses is £47. If you're missing just 10 calls per week, that's:</p>

      <ul>
        <li><strong>Weekly loss:</strong> £282 (assuming 60% would have booked)</li>
        <li><strong>Monthly loss:</strong> £1,128</li>
        <li><strong>Annual loss:</strong> £13,536</li>
      </ul>

      <h2>Why Calls Go Unanswered</h2>
      <p>Most business owners can't answer every call because they're:</p>
      <ul>
        <li>With a customer</li>
        <li>Working on a job</li>
        <li>Driving between appointments</li>
        <li>On their lunch break</li>
        <li>Closed for the evening</li>
      </ul>

      <h2>The Solution: AI Receptionists</h2>
      <p>Modern AI receptionists like No Missed Calls can answer every call, 24/7, with a natural British voice. They can:</p>
      <ul>
        <li>Book appointments directly into your calendar</li>
        <li>Answer FAQs about your business</li>
        <li>Take messages for complex enquiries</li>
        <li>Send instant notifications to your phone</li>
      </ul>

      <p>The cost? Less than £15 per day - a fraction of what you're losing to missed calls.</p>
    `,
    author: 'NMC Team',
    publishedAt: '15 January 2025',
    category: 'Business Tips',
    tags: ['missed calls', 'ROI', 'UK business', 'revenue'],
    featuredImage: '/blog/missed-calls-cost.jpg',
    readTime: '5 min read'
  },
  {
    slug: 'ai-receptionist-vs-human-receptionist',
    title: 'AI Receptionist vs Human Receptionist: 2025 Comparison',
    description: 'Should you hire a human receptionist or use AI? We compare costs, availability, and capabilities to help you decide.',
    content: `
      <h2>The Reception Dilemma</h2>
      <p>Every growing business faces the same question: how do you handle incoming calls professionally without breaking the bank?</p>

      <h2>Human Receptionist: The Traditional Choice</h2>
      <p><strong>Costs:</strong></p>
      <ul>
        <li>Salary: £22,000 - £28,000/year</li>
        <li>National Insurance: £3,000+/year</li>
        <li>Pension contributions: £800+/year</li>
        <li>Holiday cover: £2,000+/year</li>
        <li>Training and equipment: £1,000+/year</li>
      </ul>
      <p><strong>Total: £29,000 - £35,000/year</strong></p>

      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Only available 8 hours/day, 5 days/week</li>
        <li>Takes holidays and sick days</li>
        <li>Can only handle one call at a time</li>
        <li>May quit, requiring rehiring and retraining</li>
      </ul>

      <h2>AI Receptionist: The Modern Alternative</h2>
      <p><strong>Costs:</strong></p>
      <ul>
        <li>Monthly subscription: £399/month (£4,788/year)</li>
        <li>One-time setup: £450</li>
        <li>No hidden costs</li>
      </ul>
      <p><strong>Total: £5,238/year (first year), £4,788/year thereafter</strong></p>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Available 24/7/365</li>
        <li>Never sick, never takes holidays</li>
        <li>Handles unlimited simultaneous calls</li>
        <li>Consistent quality every time</li>
        <li>Instant answers, no hold times</li>
      </ul>

      <h2>The Verdict</h2>
      <p>For most small businesses, an AI receptionist offers better value. You save over £24,000/year while getting 24/7 coverage instead of just 40 hours/week.</p>

      <p>The only scenario where a human might be better is if you need complex problem-solving or face-to-face reception duties. For phone-only reception, AI wins on every metric.</p>
    `,
    author: 'NMC Team',
    publishedAt: '10 January 2025',
    category: 'Comparisons',
    tags: ['AI receptionist', 'hiring', 'costs', 'comparison'],
    featuredImage: '/blog/ai-vs-human.jpg',
    readTime: '6 min read'
  },
  {
    slug: 'best-industries-for-ai-receptionists',
    title: 'Top 10 Industries That Benefit Most From AI Receptionists',
    description: 'Discover which UK industries see the highest ROI from AI phone answering. Is your business on the list?',
    content: `
      <h2>Which Businesses Benefit Most?</h2>
      <p>AI receptionists work best for businesses that rely heavily on phone bookings and have consistent, predictable enquiries. Here are the top 10:</p>

      <h2>1. Hair and Beauty Salons</h2>
      <p><strong>Why it works:</strong> High call volume, simple booking needs, evening/weekend demand.</p>
      <p><strong>Average ROI:</strong> 8x investment</p>

      <h2>2. Dental Practices</h2>
      <p><strong>Why it works:</strong> High booking values, busy reception staff, emergency calls.</p>
      <p><strong>Average ROI:</strong> 12x investment</p>

      <h2>3. Auto Repair Shops</h2>
      <p><strong>Why it works:</strong> Mechanics can't answer phones, high booking values.</p>
      <p><strong>Average ROI:</strong> 10x investment</p>

      <h2>4. Restaurants</h2>
      <p><strong>Why it works:</strong> Reservation management, busy dinner service, handles dietary questions.</p>
      <p><strong>Average ROI:</strong> 6x investment</p>

      <h2>5. Plumbers and Electricians</h2>
      <p><strong>Why it works:</strong> Always on jobs, emergency calls, 24/7 demand.</p>
      <p><strong>Average ROI:</strong> 15x investment</p>

      <h2>6. Physiotherapists and Chiropractors</h2>
      <p><strong>Why it works:</strong> In treatment all day, can't answer phones.</p>
      <p><strong>Average ROI:</strong> 9x investment</p>

      <h2>7. Estate Agents</h2>
      <p><strong>Why it works:</strong> Out on viewings, high-value leads, after-hours enquiries.</p>
      <p><strong>Average ROI:</strong> 20x investment</p>

      <h2>8. Veterinary Clinics</h2>
      <p><strong>Why it works:</strong> Emergency calls, busy treatment rooms, triage capability.</p>
      <p><strong>Average ROI:</strong> 11x investment</p>

      <h2>9. Driving Instructors</h2>
      <p><strong>Why it works:</strong> Can't answer while teaching, simple booking needs.</p>
      <p><strong>Average ROI:</strong> 7x investment</p>

      <h2>10. Cleaning Services</h2>
      <p><strong>Why it works:</strong> Teams on jobs all day, quote requests, scheduling.</p>
      <p><strong>Average ROI:</strong> 8x investment</p>

      <h2>Is Your Industry Missing?</h2>
      <p>Even if your industry isn't listed, if you take bookings by phone and miss calls, an AI receptionist can help. Get a free demo to see how it works for your business.</p>
    `,
    author: 'NMC Team',
    publishedAt: '5 January 2025',
    category: 'Industry Guides',
    tags: ['industries', 'ROI', 'use cases', 'small business'],
    featuredImage: '/blog/top-industries.jpg',
    readTime: '7 min read'
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getLatestArticles = (count: number = 3): Article[] => {
  return articles.slice(0, count);
};
