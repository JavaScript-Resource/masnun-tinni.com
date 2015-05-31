{% extends "../layouts/default.swig" %}

{% block head %}
	<script type="application/javascript" src="/js/react/build/hello.js"></script>

	<style>
		div.container img {
			width: 300px;
			height: 300px;
		}
	</style>
{% endblock %}

{% block content %}
	<div class="container">
		{% for photo in photos.results %}

			<img src="{{ photo.url }}" alt="{{ photo.slug }}"/><br/>
			<strong>{{ photo.title }}</strong>

		{% endfor %}
	</div>
{% endblock %}
