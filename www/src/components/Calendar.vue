<template>
    <!-- Adding a Date Setter so that user can select week that they would like to have displayed and selected -->
    <div>
        <form>    
            <div class="form-group">
                <label for="startDate">Start Date:</label>
                <input type="date" id="week" name="week" class="form-control" placeholder="Start Date" :min="date" v-model="event.startDate" required
                @change="validateForm">
                <p class="error-message text-left text-danger" v-if="!this.validator.startDate">Start date must be today or later.</p>
            </div>        
        </form>     
    </div>
</template>


<script>
</script>


<style>

</style>