---
permalink: /
---

Welcome to my personal website

## My GitHub repositories <a id="projects" />
{% assign public_repositories = site.github.public_repositories | where:'fork', false | sort: 'pushed_at' | reverse %}
| Title | Description | Last Push |
| :---:  | :---: | :---: |
{% for repository in public_repositories limit: 9 -%}
| [{{ repository.name }}]({{ repository.html_url }}) | {{repository.description}} | {{repository.pushed_at}} |
{% endfor %}
<br />


## Technical Papers <a id="papers" />

### Old-Skool DRMs
#### These are some technical papers I've written while reverse engineering very old DRMs that aren't used anymore, just for learning purposes.

| Title | English PDF | Italian PDF |
| :---:  | :---: | :---: |
|Safedisc 1.06-1.11 (Midtown Madness)|[Download]({{site.url}}/papers/safedisc/MidtownMadness.pdf)|[Download]({{site.url}}/papers/safedisc/MidtownMadness_ITA.pdf)
|Laserlock (Evolva)|[Download]({{site.url}}/papers/laserlock/Evolva.pdf)|[Download]({{site.url}}/papers/laserlock/Evolva_ITA.pdf)
|SecuROM **new** 4.48.00.0004 (Arabian Nights)|---|[Download]({{site.url}}/papers/securom/ArabianNights_ITA.pdf)

<br />

## About <a id="about" />

Work in progress
