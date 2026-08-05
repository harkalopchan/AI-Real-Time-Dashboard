import React from "react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-14 lg:w-20 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-8 gap-4 md:gap-12">
      {/* Home Icon */}
      <div className="p-2 md:p-3 rounded-lg bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 cursor-pointer transition-colors">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><g><path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"/></g></svg>
      </div>

      {/* Chart Icon */}
      <div className="p-2 md:p-3 rounded-lg text-slate-500 hover:bg-slate-800 cursor-pointer transition-colors">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M3,22H24v2H3c-1.654,0-3-1.346-3-3V0H2V21c0,.551,.449,1,1,1ZM17,5v2h3.586l-5.586,5.586-4-4-6.707,6.707,1.414,1.414,5.293-5.293,4,4,7-7v3.586h2V5h-7Z"/></svg>
      </div>

      {/* Users Icon */}
      <div className="p-2 md:p-3 rounded-lg text-slate-500 hover:bg-slate-800 cursor-pointer transition-colors">
        <svg className="w-5 h-5" height="24" width="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 14a5.006 5.006 0 0 0 -5-5h-5a5.006 5.006 0 0 0 -5 5v4h2v-4a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v4h2zm2.5-11a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm6.5 14a5.006 5.006 0 0 0 -5-5h-4v2h4a3 3 0 0 1 3 3v4h2z"/></svg>
      </div>

      {/* Message Icon */}
      <div className="p-2 md:p-3 rounded-lg text-slate-500 hover:bg-slate-800 cursor-pointer transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m24,9.5c0-1.209-.859-2.218-2-2.45V1c0-.521-.399-.954-.917-.997-.514-.048-.983.319-1.069.832-.389,2.333-3.62,3.165-6.514,3.165H5.5C2.467,4,0,6.467,0,9.5c0,1.651.732,3.135,1.888,4.144l3.142,8.383c.274.752.826,1.354,1.552,1.692.403.188.833.282,1.264.282.347,0,.694-.061,1.03-.183.752-.274,1.354-.826,1.692-1.552.338-.727.373-1.541.099-2.292l-1.803-4.974h4.636c2.894,0,6.125.831,6.514,3.165.081.485.501.835.985.835.028,0,.056,0,.083-.003.519-.043.917-.476.917-.997v-6.05c1.141-.232,2-1.24,2-2.45ZM5.5,6h1.496l-.03,7h-1.465c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5Zm3.288,14.657c.091.25.08.522-.033.764s-.313.426-.564.518c-.25.092-.522.08-.764-.033s-.426-.313-.521-.572l-2.408-6.425c.325.06.66.092,1.002.092h1.237l2.051,5.657Zm11.212-5.958c-1.487-1.095-3.72-1.699-6.5-1.699h-4.535l.03-7h4.504c2.78,0,5.013-.604,6.5-1.699v10.397Z"/></svg>
      </div>

      {/* Settings Icon */}
      <div className="p-2 md:p-3 rounded-lg text-slate-500 hover:bg-slate-800 cursor-pointer transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </aside>
  );
}
