<script lang="ts">
    export let title = "";
    export let text = "";
    export let avatarUrl = "";
    export let githubRef = "";
    export let youtubeRef = "";
    export let linkedinRef = "";
    export let twitterRef = "";
    export let emailAddr = "";
</script>

<div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="avatar">
        <div class="rounded-full object-cover w-64">
          <img src="{avatarUrl}" class="max-w-sm rounded-lg shadow-2xl" alt="avatar" />
        </div>
      </div>
      <div>
        <h1 class="text-5xl font-bold">{title}</h1>
        <p class="whitespace-pre-line py-6">{text}</p>
        <div class="flex justify-center">
          {#if githubRef.length > 0}
            <div class="px-2">
              <a rel="external" href="https://github.com/{githubRef}">
                <img class="object-cover w-16" src="resources/icons/github.png" alt="github" />
              </a>
            </div>
          {/if}
          {#if youtubeRef.length > 0}
            <div class="px-2">
              <a rel="external" href="https://www.youtube.com/{youtubeRef}">
                <img class="object-cover w-16" src="resources/icons/youtube.png" alt="youtube" />
              </a>
            </div>
          {/if}
          {#if linkedinRef.length > 0}
            <div class="px-2">
              <a rel="external" href="https://www.linkedin.com/in/{linkedinRef}">
                <img class="object-cover w-16" src="resources/icons/linkedin.png" alt="linkedin" />
              </a>
            </div>
          {/if}
          {#if twitterRef.length > 0}
            <div class="px-2">
              <a rel="external" href="https://twitter.com/{twitterRef}">
                <img class="object-cover w-16" src="resources/icons/twitter.png" alt="twitter" />
              </a>
            </div>
          {/if}
          {#if emailAddr.length > 0}
            <div class="px-2">
              <a rel="external" href="mailto:{emailAddr}">
                <img class="object-cover w-16" src="resources/icons/email.png" alt="email" />
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
</div>