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
      <p>Modern AI receptionists like Callbot.uk can answer every call, 24/7, with a natural British voice. They can:</p>
      <ul>
        <li>Book appointments directly into your calendar</li>
        <li>Answer FAQs about your business</li>
        <li>Take messages for complex enquiries</li>
        <li>Send instant notifications to your phone</li>
      </ul>

      <p>The cost? Less than £15 per day - a fraction of what you're losing to missed calls.</p>
    `,
    author: 'Callbot Team',
    publishedAt: '15 January 2025',
    category: 'Business Tips',
    tags: ['missed calls', 'ROI', 'UK business', 'revenue'],
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
    author: 'Callbot Team',
    publishedAt: '10 January 2025',
    category: 'Comparisons',
    tags: ['AI receptionist', 'hiring', 'costs', 'comparison'],
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
    author: 'Callbot Team',
    publishedAt: '5 January 2025',
    category: 'Industry Guides',
    tags: ['industries', 'ROI', 'use cases', 'small business'],
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
