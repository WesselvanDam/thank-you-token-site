<script>
  import Header from "$lib/components/Header.svelte";
</script>

<div class="flex flex-col items-center justify-center min-h-screen pb-8">
  <Header />
  <div class="max-w-2xl px-4 py-8 text-left">
    <h1 class="text-3xl font-bold">Privacy Policy</h1>
    <h3 class="text-xl font-bold mt-6">Introduction</h3>
    <p class="mt-2">
      As the Thank You Token team, we respect your privacy and are committed to
      protecting it. This Privacy Policy explains our policies and practices
      regarding the collection, use, storage, and disclosure of your personal
      information by the <i>Thank You Token App.</i>, available at
      <a href="https://app.thank-you-token.nl" class="text-tyt_blue">
        app.thank-you-token.nl</a
      >.
    </p>
    <h3 class="text-xl font-bold mt-6">Information We Collect</h3>
    <p class="mt-2">
      The Thank You Token web application uses the Google Drive API with the
      <i>appDataScope</i> to store user data. This means we only have access to
      the <i>appDataFolder</i> in your Google Drive, a special folder that is not
      visible among your regular Google Drive folders and is accessible only by the
      application that created it. Here, your submitted tokens and their metadata
      (names, dates and descriptions) are stored. We do not collect or have access
      to any other data in your Google Drive or Google Account.
    </p>
    <h3 class="text-xl font-bold mt-6">How We Use Your Information</h3>
    <p class="mt-2">
      The data we store in your appDataFolder is used solely for the purpose of
      enhancing your user experience in the Thank You Token app. We do not
      share, sell, rent, or trade this data with third parties, and do not send
      your data to any other form of database.
    </p>
    <h3 class="text-xl font-bold mt-6">Changes to This Privacy Policy</h3>
    <p class="mt-2">
      We may update our Privacy Policy if deemed necessary. We will notify you
      of any changes by posting the new Privacy Policy on this page.
    </p>
    <h3 class="text-xl font-bold mt-6">Contact Us</h3>
    <p class="mt-2">
      If you have any questions about this Privacy Policy, please contact us
      at
      <a href="mailto:info@thank-you-token.nl" class="text-tyt_blue"
        >info@thank-you-token.nl</a
      >.
    </p>
    <p class="mt-2">Last updated: September 13, 2024</p>
  </div>
</div>
