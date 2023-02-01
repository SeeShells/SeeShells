export const howToInfo =
	[
		{
			title: 'Parsing',
			tabs:
			[
			
				{
					title: 'Online',
					definition: 'Online Parsing refers to parsing shellbag data directly from the machine presently in use.',
					toStatement: 'To parse an active registry:',
					steps: ['From the start menu, select the option that says "From Active Registry" \n Alternatively, if SeeShells is already running, select Import > From Live Registry.', 'The shellbags from the live machine will populate the multiple views available in SeeShells and the user can explore the shellbags and the extrapolated shellbag events.']
				},

				{
					title: 'Offline (Windows)',
					definition: 'Offline Parsing refers to parsing shellbag data from a Windows Registry hive, the UsrClass.dat file.',
					toStatement: 'To get an offline hive for SeeShells from a Windows machine:',
					steps: ['Access the Windows File Explorer as an Admin user', 'Navigate to USERHOME\AppData\Local\Microsoft\Windows', 'Copy and Paste the UsrClass.dat file from the Windows folder to the destination folder']
				}
			]
			
		},
		{
			title: 'Parsing',
			tabs:
				[

					{
						title: 'Online',
						definition: 'Online Parsing refers to parsing shellbag data directly from the machine presently in use.',
						toStatement: 'To parse an active registry:',
						steps: ['From the start menu, select the option that says "From Active Registry" \n Alternatively, if SeeShells is already running, select Import > From Live Registry.', 'The shellbags from the live machine will populate the multiple views available in SeeShells and the user can explore the shellbags and the extrapolated shellbag events.']
					},

					{
						title: 'Offline (Windows)',
						definition: 'Offline Parsing refers to parsing shellbag data from a Windows Registry hive, the UsrClass.dat file.',
						toStatement: 'To get an offline hive for SeeShells from a Windows machine:',
						steps: ['Access the Windows File Explorer as an Admin user', 'Navigate to USERHOME\AppData\Local\Microsoft\Windows', 'Copy and Paste the UsrClass.dat file from the Windows folder to the destination folder']
					}
				]
		}

	]