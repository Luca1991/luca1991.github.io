---
permalink: /
---

Welcome to my personal website

# ⭐️ GitHub Stuff <a id="github" />
## OG Repositories & Stats
{% assign public_repositories = site.github.public_repositories | where:'fork', false | sort: 'pushed_at' | reverse %}
| Title | Description | Last Push |
| :---:  | :---: | :---: |
{% for repository in public_repositories limit: 9 -%}
| [{{ repository.name }}]({{ repository.html_url }}) | {{repository.description}} | {{repository.pushed_at}} |
{% endfor %}

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Luca1991&theme=dark&hide_border=true&show_icons=true&line_height=20&count_private=true){:style="display:block; margin-left:auto; margin-right:auto"}

<br>

# 🧑🏻‍💻 Projects <a id="projects" />
## Old-Skool DRMs & Technical Papers
These are some technical papers I've written while reverse engineering very old DRMs that aren't used anymore, just for learning purposes.

| Title | English PDF | Italian PDF |
| :---:  | :---: | :---: |
|Safedisc 1.06-1.11 (Midtown Madness)|[Download]({{site.url}}/papers/safedisc/MidtownMadness.pdf)|[Download]({{site.url}}/papers/safedisc/MidtownMadness_ITA.pdf)
|Laserlock (Evolva)|[Download]({{site.url}}/papers/laserlock/Evolva.pdf)|[Download]({{site.url}}/papers/laserlock/Evolva_ITA.pdf)
|SecuROM **new** 4.48.00.0004 (Arabian Nights)|[Download]({{site.url}}/papers/securom/ArabianNights.pdf)|[Download]({{site.url}}/papers/securom/ArabianNights_ITA.pdf)
|SecuROM **new** 3.06.00.0003 (South Park Rally)|----|[Download]({{site.url}}/papers/securom/SouthParkRally_ITA.pdf)

## ReverseIT
Are you interested in reverse engineering and cyber security? Then you should check [ReverseIT](https://reverseit.space), the italian-based space about everything low level!

<br>

# 📚 About <a id="about" />
## Curriculum Vitae
Instead of the old and boring CV, take a look at my Linkedin profile [here](https://www.linkedin.com/in/luca91). It is definitely more up to date than any CV.pdf file 😜
