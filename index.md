---
layout: default
---

{% for post in site.posts %}
<section class="teaser">
    <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
	<div class="post-date">{{ post.date }}</div>
    <div class="entry">
      {{ post.excerpt }}
    </div>
	{% if post.excerpt.size < post.content.size %}
    <p class="read-more"><a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a></p>
	{% endif %}
</section>
{% endfor %}
