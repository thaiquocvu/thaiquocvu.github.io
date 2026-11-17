/* ------------------------------------------------------------------
   CONTENT FILE — edit the words here, never the layout.
   Everything shown on the site comes from this one object.
   Rules used while writing: only facts from Oscar's reports and
   dashboards; academic work is labelled as academic; findings are
   analytical findings, not results achieved by a real organisation.
   ------------------------------------------------------------------ */
window.SITE = {
  name: "Oscar Vu",
  location: "Melbourne, Australia",
  headline: "Business, people & everything in between.",
  intro: "Exploring business challenges through data, technology, and human-centred thinking.",
  pitch:
    "I'm completing a Master of Business Information Technology at RMIT, after a Bachelor of Business (Tourism and Hospitality) and about five years working front of house. I build dashboards and prototypes that start from a customer or operational question.",

  /* Public contact details. Add only what you are happy to publish. */
  contact: {
    email: "vuquocthaipqc@gmail.com",
    linkedin: "https://www.linkedin.com/in/thai-vu-9a4278450",
    resume: "assets/Oscar_Vu_Resume.pdf",
  },

  education: [
    { what: "Master of Business Information Technology", where: "RMIT University", when: "2026" },
    { what: "Bachelor of Business (Tourism and Hospitality)", where: "La Trobe University", when: "2024" }
  ],

  experience: [
    { role: "Front of House & Kitchenhand", where: "Nene Chicken, Hawthorn", when: "July 2023 – July 2025", note: "Daily restaurant operations, customer service and food preparation." },
    { role: "Front of House Waiter", where: "Coin Laundry Cafe, Armadale", when: "March 2021 – March 2023", note: "Customer service and enquiries, working with kitchen and floor staff during busy periods." },
    { role: "Front of House Waiter and Manager", where: "YTB YakiTori Bar, South Melbourne", when: "July 2018 – November 2020", note: "Moved from waiter to front-of-house manager, coordinating the team and resolving customer concerns." }
  ],

  skills: [
    { group: "Data & Business Intelligence", items: ["Tableau", "Tableau Prep Builder", "Power BI", "SQL", "Microsoft Excel"] },
    { group: "Business & Analysis", items: ["Business research", "Data analysis", "Digital strategy", "Problem-solving"] },
    { group: "Development & Technology", items: ["JavaScript", "HTML/CSS", "Node.js", "Express", "Google Gemini API", "Visual Studio Code"] },
    { group: "Professional", items: ["Customer service", "Team coordination", "Stakeholder communication"] }
  ],

  lookingFor: "I am looking for graduate roles as a business analyst, business intelligence or data analyst, or in operations and customer experience. I am also open to hotel and hospitality roles, where my degree in Tourism and Hospitality and five years of front-of-house work apply directly.",

  /* About page: each entry is one short block. */
  aboutStory: [
    { h: "Where I started", p: [
      "I spent about five years in hospitality, finishing as a front-of-house manager. That work taught me how a service business runs day to day: who is waiting, what is going wrong, and what a guest remembers afterwards."
    ]},
    { h: "Why information technology", p: [
      "I completed a Bachelor of Business (Tourism and Hospitality) at La Trobe University in 2024, then moved into the Master of Business Information Technology at RMIT, which I am completing in 2026.",
      "I made the move because I kept seeing the same gap:"
    ], quote: "The people closest to customers rarely have the data, and the people with the data are rarely close to customers." },
    { h: "What I work on", p: [
      "My projects sit in that gap. TravelSphere turns hotel reviews into partnership and service decisions. Catalyst Youth Foundation examines where fundraising income is fragile. Techkie tests how an AI assistant can answer routine questions and hand over to a person when it should.",
      "I bring the same habits to each: start from the customer or operational question, keep the data honest, and say clearly what the analysis can and cannot show."
    ]}
  ],

  projects: [
    {
      id: "travelsphere",
      title: "TravelSphere",
      subtitle: "Hotel & Customer Experience Intelligence",
      category: "Business Intelligence / Tableau / Travel Analytics",
      year: "2026",
      role: "Individual academic project (Modern Business Intelligence)",
      type: "Four-dashboard BI solution",
      tools: "Tableau Prep Builder, Tableau Desktop",
      cover: "assets/ts-strategy.webp",
      blurb: "Four Tableau dashboards that help a travel agency choose partner hotels and see where guest experience breaks down.",
      shows: "Cleaning a large, messy review file and writing down each decision. Building Tableau dashboards that a non-technical manager can read. Turning review scores into suggestions for specific hotel teams. Saying plainly what the data cannot show.",
      status: "Academic project with a public dataset. TravelSphere is a case-study client.",
      sections: [
        { h: "Overview", p: [
          "TravelSphere is a travel agency specialising in personalised trips across Europe. This academic project builds Business Intelligence dashboards for its Head of Customer Experience and executive team, to support hotel partnership evaluation, customer satisfaction analysis and strategic decisions.",
          "The data is a public hotel review dataset. The analysis uses 2017 reviews only, which is about 156,808 records after filtering."
        ]},
        { h: "Business problem", p: [
          "Choosing a partner hotel from star ratings alone hides the useful detail. A hotel can score well overall and still generate repeated complaints about rooms or breakfast, and different guest nationalities score the same hotel differently.",
          "The dashboards were designed around four questions: which cities perform best, which customer groups are harder to satisfy, which operational areas drive complaints, and which hotels look like safe partnership candidates."
        ]},
        { h: "Objectives", ul: [
          "Give executives a one-screen view of satisfaction by city and by month.",
          "Show how reviewer nationality changes the score a hotel receives.",
          "Link complaint themes to the team responsible for fixing them.",
          "Shortlist partner hotel candidates using score, review volume and negative comment share."
        ]},
        { h: "Data cleaning and transformation", p: [
          "Tableau Prep Builder was used to clean about 393,000 raw review records from 2015–2017, filtered to 2017 with YEAR([Review_Date]) = 2017. Nationality text was standardised with TRIM(), blank and placeholder review text such as \"nothing\" or \"n/a\" was grouped into a single \"No Negative Feedback\" or \"No Positive Feedback\" value, and missing nationalities became \"Unknown\".",
          "Calculated fields added review month, satisfaction groupings and rule-based topic classification (room, staff, breakfast, cleanliness, location, value, other). A Responsible Team field maps each complaint topic to a department such as Rooms Division or Food & Beverage.",
          "Potential duplicate rows were identified but kept, because removing them risked deleting valid reviews and shrinking the dataset sharply."
        ], figs: [
          { src: "assets/ts-prep-1.webp", cap: "Tableau Prep Builder: first cleaning step, with the 2017 filter and standardisation calculations." },
          { src: "assets/ts-prep-2.webp", cap: "Tableau Prep Builder: second step, removing fields and handling missing nationalities." }
        ]},
        { h: "Cleaning steps at a glance", table: { head: ["Issue found", "What I did", "Why"], rows: [
          ["Reviews from several years", "Kept only reviews dated 2017", "Matches the project scope; about 156,808 rows remained"],
          ["Placeholder review text (\"nothing\", \"none\", \"n/a\", blank)", "Grouped into \"No Negative Feedback\" or \"No Positive Feedback\"", "Stops empty answers being read as real comments"],
          ["Inconsistent spacing in nationality", "Trimmed the text (TRIM, LOWER)", "So the same country is not counted twice"],
          ["Missing nationality", "Labelled \"Unknown\"", "Keeps the review instead of deleting it"],
          ["Possible duplicate rows", "Checked, then kept", "Removing them risked deleting valid reviews and shrinking the data a lot"],
          ["Only reviewers who chose to write a review are included", "Stated as a limitation", "Scores may not represent every guest"]
        ]}, note: "Source: the TravelSphere report, section 2." },
        { h: "Dashboard design", p: [
          "Four dashboards move from overview to decision. Blue shades mark stronger performance, orange marks weaker performance, and map circle size shows review volume. City and month filters let a reader narrow any view."
        ], gallery: [
          { src: "assets/ts-executive.webp", title: "1. Executive Overview", cap: "KPI row, city satisfaction ranking, monthly review volume against average score, and a geographic performance map." },
          { src: "assets/ts-segmentation.webp", title: "2. Customer Segmentation & Market Behaviour", cap: "Harsh versus generous nationalities, measured as score gap from the overall average, with a nationality-by-city heatmap." },
          { src: "assets/ts-segmentation-cont.webp", title: "2b. Customer Segmentation (continued)", cap: "A complementary view of the same dashboard: highest and lowest rating nationalities alongside the same heatmap." },
          { src: "assets/ts-operations.webp", title: "3. Operational Improvement Priorities", cap: "Monthly negative drivers, responsible team priorities, negative review themes and a city-by-month satisfaction heatmap." },
          { src: "assets/ts-strategy.webp", title: "4. Strategic Overview & Growth Opportunities", cap: "Top partner hotel candidates, performance map, nationality gaps, negative drivers and team priorities in one view." }
        ]},
        { h: "Analytical methods", ul: [
          "Calculated fields for review month, sentiment and satisfaction groups.",
          "Keyword-based (rule-based) topic classification of review text.",
          "Score gap from the overall average, used to compare nationality behaviour.",
          "Heatmaps and dual-axis charts to compare cities, months and nationalities."
        ]},
        { h: "Key insights", stats: [
          { v: "156,808", l: "reviews analysed (2017)" },
          { v: "8.39", l: "average reviewer score" },
          { v: "64.88%", l: "high satisfaction share" }
        ], ul: [
          "Barcelona (8.57) and Vienna (8.55) lead the city ranking. London (8.33) and Milan (8.35) are lowest.",
          "Reviewers from the United States (8.77), Australia (8.60) and Ireland (8.50) score highest. Iran (7.62), Jordan (7.66) and Kazakhstan (7.72) score lowest among the nationalities shown.",
          "Review volume is highest from the United Kingdom by a wide margin, so UK reviewers shape the overall score more than any other group.",
          "Among classified negative themes, Room (34.52%) is the largest, followed by Breakfast (6.25%) and Staff (5.11%). \"Other\" is the largest bucket at 45.74%.",
          "Complaints mapped to Rooms Division (54,136) and Food & Beverage (9,797) outnumber those for Front Office (8,009) and Housekeeping (1,037). \"Other Operations\" holds 79,034."
        ]},
        { h: "Business implications", p: [
          "Barcelona and Vienna combine strong scores with fewer negative comments, so they are sensible places to start a partnership search. The nationality view warns against reading one score at face value: a hotel that mostly hosts a harsher-scoring market may be better than its average suggests.",
          "The responsible-team view turns a vague \"guest feedback\" problem into a list a manager can act on, starting with rooms and breakfast."
        ]},
        { h: "Recommendations", ul: [
          "Prioritise partnership conversations with hotels in Barcelona and Vienna that pair high scores with low negative comment share.",
          "Ask candidate hotels how they manage room quality and breakfast, the most frequent named complaint themes.",
          "Compare hotel scores within nationality segments before ranking them.",
          "Re-check the shortlist after adding more years of data."
        ]},
        { h: "Limitations and reflection", p: [
          "Reviews come only from guests who chose to write one, so they do not show the whole customer experience. Topic classification is rule-based, which is why so many complaints land in \"Other\", and some reviews mix praise and complaint in one comment. Only 2017 is analysed, and the data ends in August.",
          "If I rebuilt it, I would test the keyword rules against a manually labelled sample and refine the \"Other\" group first. That group is too large to guide action on its own."
        ]}
      ]
    },

    {
      id: "catalyst",
      title: "Catalyst Youth Foundation",
      subtitle: "Fundraising Intelligence",
      category: "Data Visualisation / Business Analytics / Tableau",
      year: "2026",
      role: "Individual academic project (ISYS3438 Visualizing & Communicating Insights for Business)",
      type: "Three interactive dashboards",
      tools: "Tableau Desktop, calculated fields, Level of Detail expressions",
      cover: "assets/cy-efficiency.webp",
      blurb: "Three dashboards that examine fundraising stability, campaign efficiency and donor retention across four financial years.",
      shows: "Giving each measure one clear definition, such as net revenue and donor retention. Following groups of donors across several years in Tableau. Comparing campaigns by cost as well as by money raised. Writing recommendations a small charity could act on.",
      status: "Academic project. Figures are analytical findings from a donation dataset, not improvements achieved by the organisation.",
      sections: [
        { h: "Overview", p: [
          "Catalyst Youth Foundation is a non-profit that relies on donations to support youth programs. This academic project analyses donation records from FY2021–22 to FY2024–25 to understand income stability, fundraising efficiency and donor behaviour.",
          "The dashboards are written for three readers: management, who review stability and allocate resources; the fundraising team, who judge campaigns; and data analysts, who investigate patterns."
        ]},
        { h: "Business problem", p: [
          "Income that swings through the year, limited resources and low donor retention make long-term planning difficult. The project asks where income is fragile, which campaigns and channels return the most for the money spent, and whether donors come back."
        ]},
        { h: "Data scope", p: [
          "The dataset holds donation transactions across four Australian financial years (July to June). Each record carries the donation amount and date, donor type, campaign, communication channel, estimated solicitation cost and recurring-donation status."
        ]},
        { h: "KPI design", p: [
          "Each measure was given one definition so the three dashboards would always agree with each other."
        ], table: { head: ["Measure", "What it means", "Why it matters"], rows: [
          ["Net fundraising revenue", "Donations minus estimated solicitation costs", "Shows how stable income is once costs are taken off"],
          ["Fundraising return ratio", "Donation revenue for each $1 of estimated solicitation cost", "Compares campaigns and channels on efficiency, not only size"],
          ["Solicitation cost per $1 raised", "Estimated solicitation cost divided by donation revenue", "A simple efficiency check: lower means cheaper to raise each dollar"],
          ["Donor retention rate", "Share of FY2023–24 donors who gave again in FY2024–25. A cohort view also follows each first-year group over later years", "Shows whether donors stay"],
          ["Recurring revenue share", "Recurring gifts as a share of total donation revenue", "Shows how much income can be relied on"]
        ]}},
        { h: "Interactive dashboard development", p: [
          "Each dashboard opens with KPI tiles and moves down to supporting charts, with filter actions connecting the views so a reader can click a financial year or donor type and see the others respond. Level of Detail expressions track retention across cohorts, and a July-to-June financial-year field keeps periods consistent."
        ], gallery: [
          { src: "assets/cy-income.webp", title: "1. Understanding Income Instability", cap: "Monthly net revenue heatmap, donor-type stacked area chart and annual net revenue." },
          { src: "assets/cy-efficiency.webp", title: "2. Improving Fundraising Efficiency", cap: "Campaign return quadrant and a channel-by-donor-type return heatmap." },
          { src: "assets/cy-donors.webp", title: "3. Building Long-Term Donor Relationships", cap: "Cohort retention heatmap, recurring revenue share and average donation by donor type." }
        ]},
        { h: "Financial patterns", stats: [
          { v: "$2.00M", l: "total donations raised" },
          { v: "$1.89M", l: "net fundraising revenue" }
        ], ul: [
          "Net revenue peaks in December and June in every year shown.",
          "Annual net revenue was $532.21K in FY2021–22, about $418K in each of the next two years, and $518.12K in FY2024–25."
        ]},
        { h: "Campaign efficiency", stats: [
          { v: "$561.5K", l: "EOFY Tax Appeal net revenue" },
          { v: "29.68×", l: "EOFY Tax Appeal return ratio" },
          { v: "17.06×", l: "overall return ratio" }
        ], ul: [
          "The EOFY Tax Appeal has both the highest net revenue and the highest return ratio of the seven campaigns.",
          "Return ratios vary widely by channel and donor type, from 1.8 for Event with Individual donors to 515.7 for Website with Foundation donors. Very high ratios may reflect low estimated solicitation costs, so they need checking before budgets move."
        ]},
        { h: "Donor retention", stats: [
          { v: "35.96%", l: "donor retention rate" },
          { v: "12.94%", l: "recurring revenue share" },
          { v: "9,175", l: "unique donors" }
        ], ul: [
          "About 37% of donors in each starting cohort give again the following year (36.70%, 36.97% and 37.20% for the three cohorts with a follow-up year).",
          "Foundation donors give the largest average gift ($861), followed by Corporate ($352), Business ($133), Community Group ($63) and Individual ($28)."
        ]},
        { h: "Recommendations", ul: [
          "Add smaller campaigns in quieter months to even out income.",
          "Review campaign spend against both net revenue and return ratio, not either alone.",
          "Test targeted digital channels for different donor groups.",
          "Strengthen follow-up with first-time donors and promote monthly giving."
        ]},
        { h: "Limitations and reflection", p: [
          "Solicitation costs are estimates, so return ratios are indicative. The dataset covers four financial years only, and retention figures for the latest cohorts have little follow-up time. All figures here describe the dataset; none are verified outcomes at the organisation.",
          "The main lesson was restraint. A 515.7× ratio looks impressive, but a dashboard should say what might explain it before anyone acts on it."
        ], note: "Supplementary view (not part of the three core dashboards in the report)", gallery: [
          { src: "assets/cy-geographic.webp", title: "Geographic Reach and Program Support", cap: "Donation revenue across Australian states and territories, and suburb-level differences from the overall average donation." }
        ]}
      ]
    },

    {
      id: "techkie",
      title: "Techkie",
      subtitle: "AI Customer Support Assistant",
      category: "AI Applications / Web Development / Customer Experience / Responsible AI",
      year: "2026",
      role: "Individual academic project (proof of concept and Responsible AI impact assessment)",
      type: "Locally tested proof of concept",
      tools: "Visual Studio Code, Google Gemini API, Node.js, Express, JavaScript, HTML, CSS",
      cover: "assets/tk-ui-3-context.webp",
      dark: true,
      blurb: "A proof of concept for how a generative AI assistant could answer routine retail questions and hand complex cases to people.",
      shows: "Planning an AI assistant around what it should refuse as well as what it should answer. Building a small web app with Node.js and Express, with Gemini behind it. Writing rules that send account and order questions to a person. Testing it, and being open about what has and has not been tested.",
      status: "Techkie Australia is a fictional retailer created for an academic scenario. This is a locally tested proof of concept, not a commercial deployment.",
      sections: [
        { h: "Business problem", p: [
          "Techkie Australia is a fictional Australian online consumer electronics retailer with about 120 employees, including a 12-person customer service team. Much of that team's time goes on repeat enquiries about returns, refunds, delivery, warranties, Click & Collect and payments.",
          "Some cases cannot be handled safely by software: anything tied to an individual order, account or policy exception. The challenge is to automate the routine questions without pretending the assistant can do more than it can."
        ]},
        { h: "Proposed solution", p: [
          "A web chat assistant that answers only from approved Techkie information, asks for clarification or hands over to human support when it lacks that information, and is clear with customers about what it cannot do. The project explores how generative AI can support routine enquiries, maintain context and apply the right policy information."
        ]},
        { h: "Technical architecture", band: true, p: [
          "The web interface sends each enquiry, together with the conversation so far, to the Node.js and Express backend. The backend identifies the topic or product and retrieves the relevant sections from two controlled sources. Where Gemini is used, it receives that retrieved information, the recent conversation history and system instructions, and generates a grounded response. If approved information is missing, unclear or customer-specific, the enquiry goes to human support.",
          "Before Gemini is called, the backend runs rule-based checks: a rate limit, prompt-injection phrases, requests for live order or account data, requests for a person, membership questions, store locations, budget and recommendation requests, and return questions about a known product. When one applies, the backend answers directly from the approved policy and catalogue text. Anything else goes to Gemini.",
          "The Techkie Customer Support Knowledge Base holds approved information on returns and refunds, delivery and tracking, Click & Collect, warranties, damaged or faulty products and payments. It was adapted from publicly available retailer support material and rewritten as fictional Techkie policy. The Techkie Product Catalogue is a fictional dataset of product names, categories, prices and features. Keeping policy and product facts in separate sources sets a clear boundary: when neither has the answer, the assistant should say so instead of inventing one."
        ], ul: [
          "Development environment: Visual Studio Code",
          "Backend: Node.js and Express",
          "Front end: HTML, CSS and JavaScript",
          "Language model: Google Gemini API (Flash-Lite model)",
          "Controlled sources: customer-support knowledge base and fictional product catalogue"
        ], figs: [
          { src: "assets/tk-architecture.webp", cap: "System architecture from the project report.", dark: true },
          { src: "assets/tk-flow.webp", cap: "Decision flow: identify the topic, retrieve information, then respond or escalate.", dark: true }
        ]},
        { h: "Development process", p: [
          "The application runs locally for prototype testing. Gemini was used to support development, debugging and refinement, and the project Readme records representative prompts: building the assistant, adding the product catalogue, keeping conversation context, handling return logic and fallback behaviour, de-escalating frustrated customers, recommending products from the catalogue, handling unknown products and membership questions, and fixing the Send button.",
          "The Readme also explains how to run the proof of concept locally. The Gemini API key is held in a local file and is not part of the project files shared publicly."
        ]},
        { h: "Chatbot capabilities", ul: [
          "Answers routine retail policy questions.",
          "Provides approved product information and catalogue-based recommendations.",
          "Keeps context across follow-up questions, so \"Can I return it?\" refers to the product just discussed.",
          "Separates change-of-mind returns, product-specific conditions and faulty-product or warranty cases.",
          "Recognises unsupported questions and responds calmly to frustrated customers.",
          "Redirects customer-specific enquiries to human support."
        ], p: [
          "Example flow from the report: a customer asks about the AirSound Pro headphones, the backend retrieves the catalogue entry, and a follow-up of \"Can I return it?\" is resolved to the same product using conversation history. \"Where is my order?\" needs live order data the proof of concept does not have, so it goes to human support."
        ], note: "The screenshots below are the real interface running locally. The Gemini API was not called when they were captured: each reply here comes from the backend's rule-based handlers, which run before Gemini. Answers that depend on Gemini are not shown.", grid: true, gallery: [
          { src: "assets/tk-ui-1-start.webp", title: "Initial interface", cap: "Welcome screen with suggested questions." },
          { src: "assets/tk-ui-2-product.webp", title: "Product enquiry", cap: "A question about the AirSound Pro stock status. The assistant names the catalogue product and says it cannot confirm live stock." },
          { src: "assets/tk-ui-3-context.webp", title: "Follow-up using context", cap: "\"Can I return it?\" is resolved to the AirSound Pro and answered with the headphone change-of-mind conditions." },
          { src: "assets/tk-ui-4-escalation.webp", title: "Escalation to human support", cap: "A live order request the assistant cannot handle. It explains the limit and gives the fictional PoC support details." }
        ] },
        { h: "How a question is handled", p: [
          "Before Gemini is called, the backend checks the message against a set of rules, in order. Gemini only answers when none of the rules apply."
        ], table: { head: ["Customer says", "What happens", "Who answers"], rows: [
          ["Too many messages too quickly", "Limited to 12 messages every 10 seconds per visitor", "Rule"],
          ["Try to override the instructions or ask for the system prompt", "Refuses and redirects to Techkie topics", "Rule"],
          ["Ask about membership or loyalty", "Says there is no membership information and cannot check accounts", "Rule"],
          ["Where is my order? Check my account or refund", "Explains it cannot see orders or accounts and gives the support contact", "Rule"],
          ["Asks for a human", "Cannot transfer the chat, so it gives the support email, phone and hours", "Rule"],
          ["Weather, jokes or other off-topic questions", "Politely says it only covers Techkie support", "Rule"],
          ["Gibberish, or the same question again and again", "Redirects, then points to human support", "Rule"],
          ["Known product, return, store or recommendation question", "Answers from the product catalogue and knowledge base", "Rule"],
          ["Anything else", "Passes the question, the matched Techkie information and the chat history to Gemini", "Gemini"]
        ]}, note: "Support contact details are fictional. This table summarises the backend's code; it is not a test result." },
        { h: "Responsible AI safeguards", rai: [
          { t: "Reliability and safety", d: "Responses stay grounded in approved policy and product information. Unsupported or unclear questions trigger clarification or escalation." },
          { t: "Policy compliance", d: "Return and warranty rules are applied by scenario and product category, not blended into one answer." },
          { t: "Privacy protection", d: "The assistant avoids asking for unnecessary personal information and sends account-specific cases to a person." },
          { t: "Transparency", d: "Customers are told they are talking to AI and what the assistant cannot access." },
          { t: "Fairness and consistency", d: "Rephrased versions of the same question should produce the same policy outcome. The plan includes testing this." },
          { t: "Human oversight and escalation", d: "The assistant can inform but cannot make customer-specific decisions. High-impact failures are reviewed before system changes." }
        ]},
        { h: "Testing approach", p: [
          "The report defines three core KPIs, each with a minimum target of 80% of predefined test cases: answer accuracy, policy compliance and escalation accuracy. A response-consistency check extends them, and the monitoring plan sets out when to retest and what to do if a KPI falls below target.",
          "The project also includes automated tests for membership and unsupported-information handling. They run with the Gemini call mocked, so they check the backend's routing, not the model's wording.",
          "I also ran the 25 demo questions from the report's appendix with no Gemini key. 20 were answered by the backend's own rules and 5 would be sent to Gemini. This shows which answers do not depend on the model. It is not a pass rate, and the Gemini-dependent answers have not been scored yet."
        ], note: "These are evaluation targets, not achieved results. No test scores are reported on this page." },
        { h: "Limitations", p: [
          "This is an academic proof of concept for a fictional retailer, tested locally. It is not a deployed commercial product. It does not connect to live customer accounts, actual orders, payment systems, real-time inventory or refund processing, and it cannot perform customer-specific transactions."
        ]},
        { h: "Reflection", p: [
          "The useful design decision was the boundary: two controlled sources, and a clear rule for what happens when they run out. Next steps:"
        ], ul: [
          "Run the planned test cases and report the three KPIs against the 80% targets.",
          "Capture screenshots or a short recording of Gemini-generated answers, which the current screenshots do not include.",
          "Test paraphrased questions to check consistency.",
          "Consider a hosted demo only with the API key kept on a server, usage limits, clear fictional labelling and no unnecessary personal data collected."
        ]}
      ]
    }
  ],

  archive: [
    {
      title: "Indigenous Digital Healthcare Service Design",
      kind: "Proposal · Research",
      text: "A proposed sequential exploratory mixed-methods study on how Indigenous participation in service design could support culturally safe digital healthcare, framed for a consulting organisation. This is a proposal only: no interviews, surveys or co-design activities have been carried out."
    },
    {
      title: "MyLocation Commercial Real Estate: BI Solution Proposal",
      kind: "Proposal · Business Intelligence",
      text: "A proposed cloud-based BI architecture for a commercial real estate agency, covering data integration and ETL, market intelligence dashboards, governance and security. This is an academic proposal, not a deployed system."
    }
  ]
};
