import React from 'react';

export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">ページが見つかりません<br/><br/>
        ACTIVITIESページは現在メンテナンス中です。
        </p>
        <a href="./" className="text-blue-600 hover:underline">Go to Home</a>
      </div>
    </div>
  );
};
