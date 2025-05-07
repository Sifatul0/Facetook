
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Facetook() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('signin');
  const [posts, setPosts] = useState([]);

  const handleSignIn = () => setPage('profile');
  const handleSignUp = () => setPage('profile');

  const handleCreatePost = (text, file) => {
    setPosts([{ text, file, reactions: 0, comments: [] }, ...posts]);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      {page === 'signin' && (
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4 p-6">
            <h1 className="text-2xl font-bold text-center">Facetook Sign In</h1>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button className="bg-blue-500 w-full" onClick={handleSignIn}>Sign In</Button>
            <Button variant="outline" onClick={() => setPage('signup')}>Create Account</Button>
          </CardContent>
        </Card>
      )}

      {page === 'signup' && (
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4 p-6">
            <h1 className="text-2xl font-bold text-center">Facetook Sign Up</h1>
            <Input placeholder="Real Name" />
            <Input placeholder="Nickname" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="School / College" />
            <Input placeholder="Birthday" type="date" />
            <Input placeholder="Phone Number" />
            <Textarea placeholder="Bio" />
            <Input placeholder="Relationship Status" />
            <Button className="bg-blue-500 w-full" onClick={handleSignUp}>Create Profile</Button>
          </CardContent>
        </Card>
      )}

      {page === 'profile' && (
        <div className="w-full max-w-4xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-48 h-48 border border-gray-300">
              <p className="text-center text-sm">Profile Photo</p>
            </div>
            <div className="flex-1 space-y-1">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Nickname:</strong> johnd</p>
              <p><strong>School:</strong> ABC College</p>
              <p><strong>Relationship:</strong> Single</p>
              <p><strong>Birthday:</strong> 1998-06-15</p>
              <p><strong>Email:</strong> john@example.com</p>
              <p><strong>Phone:</strong> 1234567890</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h2 className="font-bold mb-2">Create Post</h2>
            <Textarea placeholder="What's on your mind?" />
            <Input type="file" className="my-2" />
            <Button className="bg-blue-500" onClick={() => handleCreatePost('Sample Post', null)}>Post</Button>
          </div>

          <div className="space-y-4">
            {posts.map((post, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p>{post.text}</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline">Like ({post.reactions})</Button>
                    <Button variant="outline">Comment</Button>
                    <Button variant="outline">Share</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
