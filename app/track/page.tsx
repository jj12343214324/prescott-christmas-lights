import { redirect } from 'next/navigation';

export default function TrackPage() {
  // This page will trigger the tracking and redirect
  redirect('/');
}
