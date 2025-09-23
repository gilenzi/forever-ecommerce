import {createContext, useContext, useMemo, useState} from 'react';

const TabContext = createContext(null);

function Tabs({
  children,
  defaultSelected = '',
  classNameTab,
  classNameTabBtn,
  classNameTabDesc,
}) {
  const childArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  );

  const [activeTab, setActiveTab] = useState(() => {
    if (defaultSelected) return defaultSelected;
    const firstTab = childArray.find(
      (child) => child.type?.displayName === 'Tabs.Tab'
    );
    return firstTab?.props.name || '';
  });

  const {tabButtons, tabPanels} = useMemo(() => {
    const tabButtons = [];
    const tabPanels = [];
    childArray.forEach((child) => {
      if (child.type?.displayName === 'Tabs.Tab') tabButtons.push(child);
      else if (child.type?.displayName === 'Tabs.Description')
        tabPanels.push(child);
    });
    return {tabButtons, tabPanels};
  }, [childArray]);

  return (
    <TabContext.Provider value={{activeTab, setActiveTab}}>
      <div className={`my-10 ${classNameTab ?? ''}`}>
        <div
          className={`flex gap-3 border-b border-gray-200 ${
            classNameTabBtn ?? ''
          }`}
        >
          {tabButtons}
        </div>
        <div className={`${classNameTabDesc ?? ''}`}>{tabPanels}</div>
      </div>
    </TabContext.Provider>
  );
}

function Tab({children, name}) {
  const {setActiveTab, activeTab} = useTabContext();
  return (
    <button
      type="button"
      className={`border px-5 py-3 text-sm border-gray-300 rounded-t
        ${activeTab === name ? 'bg-gray-200 font-semibold' : ''}`}
      onClick={() => setActiveTab(name)}
    >
      {children}
    </button>
  );
}
Tab.displayName = 'Tabs.Tab';

function Description({children, name, className}) {
  const {activeTab} = useTabContext();
  return (
    <div
      className={`${className ?? ''} ${
        name === activeTab ? 'block' : 'hidden'
      }`}
    >
      {children}
    </div>
  );
}
Description.displayName = 'Tabs.Description';

function useTabContext() {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error('useTabContext must be used inside <Tabs>');
  return ctx;
}

Tabs.Tab = Tab;
Tabs.Description = Description;

export default Tabs;
