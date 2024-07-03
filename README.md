# "Create a CRM in NextJS" frontend challenge

This was created as part of a task to build the frontend for a CRM (customer relationship management) tool. The task was to recreate the dashboard of [Twenty.com](https://twenty.com/) using NextJS, React, and Shadcn UI.

Due to time constraints, the limited features added are:

### 1. Side navigation

- Build a sidebar that includes tabs like Prospects, Companies, Settings, etc. Add any other tabs that you think might be relevant for a CRM. You don't need to build out all the pages (besides the ones we call out below).
- Ensure the side navigation is grouped by subsections.
- Add tabs for Search, Notifications, and Tasks like in Twenty.
- Show information about the logged-in user or their organization.

### 2. Command bar

- Add a command bar that appears when the user presses Ctrl + K. This should look similar to the command bar on Twenty.
- The command bar should allow users to search and directly navigate to any page in the app.
- Users should be able to search prospects and companies and see a detailed view of the selected item.

### 3. Companies page

- The main table with information about the companies and customers
- Ability to select and filter data
- Option to search for specific companies
- Selecting which columns should be visible

### 3. Notifications button

- Dropdown lists to display the notifications received

### Tech stack

- Next JS
- ShadCN's UI Components
- lucide react icons

### Evaluation criteria

- Code quality: Clean, readable, and maintainable code using proper React style
- Design sense: Attractive, intuitive, and user-friendly design
- Attention to detail: Thoroughness in implementing features as described
- Initiative: Adding features or polish beyond just what we described here

Since this was a lengthy task with limited time to complete the task, i was not able to create everything. I completed as many of the specified tasks as possible within about 15 hours.

## Logistics

### Installing, building, and running

Once you download this package, do:

```ts
npm install
```

To compile and build, do:

```ts
npx tsc
npm run build
```

To run a local server:

```ts
npm run dev
```

Then open up <http://localhost:3000>.
