# Backoffice Section Implementation Instructions

## 1. Create the Component File

Create a new file `BackofficeSection.tsx` in your components directory with the following structure:

```tsx
import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  PhoneForwarded, 
  LineChart, 
  Layout, 
  Palette, 
  Smartphone, 
  Rocket, 
  Settings 
} from 'lucide-react';

// Component code will go here
```

## 2. Install Required Dependencies

```bash
npm install lucide-react
```

## 3. Implementation Steps

1. **Copy the Exact Image URL:**
   ```
   https://hiai.ai/wp-content/uploads/dentcall/backoffice.png
   ```

2. **Use the Exact Dashboard Demo Link:**
   ```
   https://dashboard.hiai.ai/app/eu/client?username=demo@dentcall.ai&password=Demo
   ```

3. **Copy the Feature Icons and Text:**
   - KB Management (Brain icon)
   - Conversations (MessageSquare icon)
   - Live Transfer (PhoneForwarded icon)
   - Analytics (LineChart icon)
   - UI Engine (Layout icon)
   - Sleek Themes (Palette icon)
   - Channels (Smartphone icon)
   - Docs & APIs (Rocket icon)
   - Custom Branding (Settings icon)

4. **Use These Exact Colors:**
   - Blue icon: text-blue-500
   - Green icon: text-green-500
   - Purple icon: text-purple-500
   - Red icon: text-red-500
   - Yellow icon: text-yellow-500
   - Indigo icon: text-indigo-500
   - Pink icon: text-pink-500
   - Orange icon: text-orange-500
   - Teal icon: text-teal-500

5. **Copy These Exact Tailwind Classes:**
   - Section: `py-20 bg-gray-100`
   - Container: `container mx-auto px-4`
   - Image wrapper: `max-w-6xl mx-auto mb-12`
   - Image: `w-full rounded-lg shadow-lg mb-12`
   - Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
   - Cards: `bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`
   - Button: `bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center justify-center text-lg font-semibold transition duration-300`

## 4. Component Structure

The section should have this exact hierarchy:
1. Section container
2. Heading and subheading
3. Dashboard preview image
4. Feature grid
5. Call-to-action button

## 5. Testing Checklist

- [ ] Image loads correctly
- [ ] Grid is responsive
- [ ] Hover effects work on cards
- [ ] Dashboard link opens in new tab
- [ ] Icons are colored correctly
- [ ] Shadows and transitions are smooth

## 6. Performance Notes

- Add `loading="lazy"` to the image
- Ensure icons are tree-shakeable
- Optimize the container queries for performance

## 7. Accessibility

- Add proper alt text to the image
- Ensure sufficient color contrast
- Add proper ARIA labels where needed

Remember to maintain the exact styling and layout to match the DentCall implementation.