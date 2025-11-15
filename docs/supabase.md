4. Supabase Schema Outline

Have Cursor generate SQL or Supabase migrations for these tables:
	•	pages
	•	id uuid pk
	•	slug text unique
	•	title text
	•	seo_title text
	•	seo_description text
	•	hero_heading text
	•	hero_subheading text
	•	body text
	•	created_at timestamptz
	•	updated_at timestamptz
	•	blog_posts
	•	id uuid pk
	•	slug text unique
	•	title text
	•	excerpt text
	•	body text
	•	tags text[]
	•	featured boolean
	•	published_at timestamptz
	•	reading_time_minutes int
	•	case_studies
	•	id uuid pk
	•	slug text unique
	•	title text
	•	client_name text
	•	summary text
	•	industry text
	•	before_metric_label text
	•	before_metric_value text
	•	after_metric_label text
	•	after_metric_value text
	•	body text
	•	featured boolean
	•	created_at
	•	updated_at
	•	faq_items
	•	id uuid pk
	•	question text
	•	answer text
	•	category text
	•	sort_order int
	•	created_at
	•	updated_at
	•	tools
	•	id uuid pk
	•	slug text unique
	•	name text
	•	short_description text
	•	long_description text
	•	category text
	•	link_url text
	•	is_external boolean
	•	metadata jsonb
	•	created_at
	•	updated_at
