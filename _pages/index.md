---
permalink: /
---



{% assign public_repositories = site.github.public_repositories | where:'fork', false | sort: 'pushed_at' | reverse %}
{% assign public_forks = site.github.public_repositories | where:'fork', true | sort: 'pushed_at' | reverse %}

<h4 id="projects" class="page__title">Public original projects I'm working on (from my GitHub activity):</h4>

| Title | Description | Last Push |
| :---:  | :---: | :---: |
{% for repository in public_repositories limit: 9 -%}
| [{{ repository.name }}]({{ repository.html_url }}) | {{repository.description}} | {{repository.pushed_at}} |
{% endfor %}
<br />

<h4 id="forks" class="page__title">Public forks I'm working on (from my GitHub activity):</h4>

| Title | Description | Last Push |
| :---:  | :---: | :---: |
{% for fork in public_forks limit: 9 -%}
| [{{ fork.name }}]({{ fork.html_url }}) | {{fork.description}} | {{fork.pushed_at}} |
{% endfor %}
<br />

<h4 id="about" class="page__title">About</h4>

Work in progress
