<script lang="ts">
    import { page } from '../stores';
    import ReasonInput from "./ReasonInput.svelte";
    import DateInput from "./DateInput.svelte";
    import TimeInput from "./TimeInput.svelte";
    import LicenceInput from "./LicenceInput.svelte";
    import TermsField from "./TermsField.svelte";
    import CheckField from "./CheckField.svelte";

    const components = [TermsField, ReasonInput, DateInput, TimeInput, LicenceInput, CheckField]
    $: selectedComponent = components[$page - 1]
</script>

<div>
    <svelte:component this={selectedComponent}/>
</div>
