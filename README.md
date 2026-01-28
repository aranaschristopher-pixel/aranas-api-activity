Markdown
# RESTful API Activity - Christopher C. Aranas
## Best Practices Implementation
**1. Environment Variables:**
 -Why did we put `BASE_URI` in `.env` instead of hardcoding it?
    -Answer: We put `BASE_URI` in `.env` so it can be easily changed for different environments without modifying the code and to keep the application more secure.

**2. Resource Modeling:**
 - Why did we use plural nouns (e.g., `/dishes`) for our routes?
    - Answer: We use plural nouns for routes to show they handle a group of items, not just one.

**3. Status Codes:**
 - When do we use `201 Created` vs `200 OK`?
    - Answer: We use 200 OK when a request succeeds, like fetching data or updating something, while 201 is when a request successfully creates a new resource, like adding a new dish.

 - Why is it important to return `404` instead of just an empty array or a generic error?
    - Answer: It’s important to return 404 Not Found because it clearly tells the client that the resource doesn’t exist, instead of making them guess.
**4. Testing:**
- ![alt text](<image/Screenshot GET request.png>)
