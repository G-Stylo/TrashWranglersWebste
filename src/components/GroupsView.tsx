import React, { useState } from 'react';
import { GroupItem } from '../types';
import { Users, MapPin, Calendar, PlusCircle, CheckCircle2, Search, Filter } from 'lucide-react';

interface GroupsViewProps {
  groups: GroupItem[];
  onJoinGroup: (groupId: string) => void;
  joinedGroupIds: string[];
}

export const GroupsView: React.FC<GroupsViewProps> = ({ groups, onJoinGroup, joinedGroupIds }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newDistrict, setNewDistrict] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const allTags = ['All', 'Parks', 'Recycling', 'Youth', 'Tree Planting', 'Social Work', 'Zero Waste'];

  const filteredGroups = groups.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || g.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Community Chapters & Squads
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Clean City Volunteer Groups
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
              Connect with neighborhood squads in your district. Join an existing team or launch a new local cleanup group today.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer self-start md:self-auto"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Form a New Group</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by district or group name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 rounded-xl border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Tag Selector */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <Filter className="w-4 h-4 text-emerald-400 flex-shrink-0 hidden sm:inline" />
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-emerald-500 text-slate-950 font-extrabold'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => {
            const isJoined = joinedGroupIds.includes(group.id);
            return (
              <div
                key={group.id}
                className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700 hover:border-teal-500/60 transition-all shadow-xl flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                  <img
                    src={group.imageUrl}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                    {group.district}
                  </div>
                </div>

                <div className="p-5 sm:w-3/5 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">{group.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">{group.description}</p>

                    <div className="mt-3 space-y-1 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-400" />
                        <span>{group.membersCount + (isJoined ? 1 : 0)} Active Members</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>Meets: {group.meetingTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags & Join Button */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-700/60">
                    <div className="flex flex-wrap gap-1">
                      {group.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-slate-900 text-teal-300 px-2 py-0.5 rounded font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onJoinGroup(group.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                        isJoined
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow'
                      }`}
                    >
                      {isJoined ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Joined Squad</span>
                        </>
                      ) : (
                        <span>Join Group</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Create Group Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-4 shadow-2xl">
              <h3 className="text-xl font-bold text-white">Form a Local Cleanup Squad</h3>
              <p className="text-xs text-slate-300">
                Register a new volunteer group for your neighborhood or school district.
              </p>

              <div className="space-y-3 text-left">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Squad Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Eastside River Cleanup Crew"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-800 rounded-xl border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">District / Zone</label>
                  <input
                    type="text"
                    placeholder="e.g. East District Ward 4"
                    value={newDistrict}
                    onChange={(e) => setNewDistrict(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-800 rounded-xl border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Brief Description</label>
                  <textarea
                    rows={3}
                    placeholder="What area will your squad focus on?"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-800 rounded-xl border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (newGroupName && newDistrict) {
                      setShowCreateModal(false);
                      alert(`Squad "${newGroupName}" registered! Your chapter kit will be prepared.`);
                      setNewGroupName('');
                      setNewDistrict('');
                      setNewDesc('');
                    }
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold cursor-pointer"
                >
                  Submit Registration
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
