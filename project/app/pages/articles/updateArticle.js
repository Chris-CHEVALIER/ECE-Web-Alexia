
import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../../components/Layout.js'
import { supabase } from '../../pages/api/supabase.js'






const handleUpdate = async function(e) {
    e.preventDefault();
    // update the element in the 'table' table
    const { data, error } = await supabase
      .from('table')
      .update({
        field1: newValue1,
        field2: newValue2
      })
      .where({ id: elementId })
  
    if (error) {
      setMessage('Sorry, an unexpected error occurred.')
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>The element has been updated.</p>
        </div>
      )
    }
  }