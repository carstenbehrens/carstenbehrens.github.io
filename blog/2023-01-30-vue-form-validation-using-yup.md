---
title: Vue Form Validation using Yup
path: /form-validation-using-vue-and-yup
date: 2023-01-30
summary: Validate your form input with Yup
tags: ["JavaScript", "Frontend", "Vue", "Yup"]
---

This blog post will show you how to validate forms in Vue 3 using Yup.

## Setup

In this blog post, I will use the following setup:

- Vue 3 with TypeScript, Prettier, and ESLint.
- Yup, for form validation.

If you don't use TypeScript, you can skip the parts specific to TypeScript.

Before we can start, we will have to add Yup as a dependency in our project.

```shell
npm install yup
```

## Simple Form Validation

### Creating a form

First, we will create a simple form with a single input field.

```vue
<template>
  <form @submit.prevent="validateForm">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="formInput.name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const formInput = reactive({
  name: "",
});
</script>
```

### Adding a validation schema

Now that we have a form, we can add a validation schema. To do this, we will use Yup.

Yup allows us to create a schema containing each field's rules. In our case, we only have one field, `name`.

```typescript
import { object, string } from 'yup';

const schema = object({
  name: string().required('Name is required'),
});
```

The field `name` should be a string and is required.
Please note that when using Yup, if a string is required, then an empty string is not allowed.

### Validating the form input

We can validate the form input now that we have our form and schema.

```typescript
const validateForm = () => {
  try {
    schema.validateSync(formInput);
  } catch (error) {
    console.log(error);
  }
};
```

We'll show an error message in the console if the validation fails.

Our complete component looks like this:

```vue
<template>
  <form @submit.prevent="validateForm">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="formInput.name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { reactive } from "vue";

const formInput = reactive({
  name: "",
});

const schema = object({
  name: string().required(),
});

const validateForm = () => {
  try {
    schema.validateSync(formInput);
  } catch (error) {
    console.log(error);
  }
};
</script>
```

Now that we have a simple form validation, we can address some missing features.

- Our form only has one field
- We don't show any error messages to the user; without this the user will not know what went wrong.
- We only validate the form when the user submits the form,
  the user experience would be improved if we validated the form as the user types.

I'll address these issues in another blog post if there is enough interest.