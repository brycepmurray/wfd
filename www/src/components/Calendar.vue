<template>
        <div class="form-group">
                <label for="startDate">Start Date:</label>
                <input type="date" name="startDate" class="form-control" placeholder="Start Date" :min="date" v-model="event.startDate" required
                    @change="validateForm">
                <p class="error-message text-left text-danger" v-if="!this.validator.startDate">Start date must be today or later.</p>
                
</template>


<script>
</script>


<style>

</style>