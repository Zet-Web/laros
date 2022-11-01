import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendContactForm } from 'shared/api/routes/contactForm'
import { ContactForm } from 'shared/types/contact'

export const sendContactFormThunk = createAsyncThunk<unknown, ContactForm>(
  'brochures/sendBrochures',
  async form => {
    const response = await sendContactForm(form)
    if (response.status === 200) {
      return response.data.data
    }
  }
)
